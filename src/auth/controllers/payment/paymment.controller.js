import axios from "axios";
import { config } from "../../../config";
import PayPalOrderModel from "../../models/PayPalOrder.model";
import PayPalTransactionModel from "../../models/PayPalTransaction.model";
import ScheduledPaymentModel from "../../models/scheduledPayment";
import SuscripcionModel from "../../models/suscripcion.model";



let paymentController = {};


paymentController.createOrder = [async (req, res) => {
    const { id } = req.params
    try {
        const payment = await ScheduledPaymentModel.findOne({
            where: {
                suscripcion_id: id,
                is_pagado: false
            }
        })
        // console.log(resp)
        // return res.json(resp);
        // console.log(config.HOST);

        if (!payment) return res.status(400).json('subscription or payment not found');
        const { monto } = payment
        // console.log(config.HOST);
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: monto,
                    },
                },
            ],
            application_context: {
                brand_name: "mycompany.com",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: `${config.HOST}/payment/subscrition/capture-order/${id}`,
                cancel_url: `${config.HOST}/payment/subscrition/cancel-payment`,
            },
        };

        // format the body
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        // Generate an access token
        const {
            data: { access_token },
        } = await axios.post(
            "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                auth: {
                    username: config.PAYPAL_CLIENT_ID,
                    password: config.PAYPAL_SECRET_KEY,
                },
            }
        );

        // console.log(access_token);
        // make a request
        const response = await axios.post(
            `${config.PAYPAL_API}/v2/checkout/orders`,
            order,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        const { status, links } = response.data
        // console.log(response.config.data);
        const payOrder = await PayPalOrderModel.create({
            suscripcion_id: id,
            payment_id: response.data.id,
            amount: monto,
            currency: 'US',
            status,
            link: links[1].href
        })
        if (!payOrder) res.status(400).json({ msg: 'Error recording Paypal Order' })
        req.params.orderid = payOrder.id;

        return res.json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Something goes wrong");
    }
}]

paymentController.captureOrder = [async (req, res) => {
    const { token } = req.query;
    const id_params = req.params.id
    const id_order = req.params.orderid
    // console.log(req.params);
    try {
        const response = await axios.post(
            `${config.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
            {},
            {
                auth: {
                    username: config.PAYPAL_CLIENT_ID,
                    password: config.PAYPAL_SECRET_KEY,
                },
            }
        );
        const { id, status, payment_source } = response.data;
        const { email_address, account_id, account_status, name, address } = payment_source.paypal
        const { given_name, surname } = name;
        const { country_code } = address;

        const pay = await PayPalTransactionModel.create({
            suscripcion_id: id_params,
            paypal_id: id,
            status,
            email_address,
            account_id,
            account_status,
            given_name,
            surname,
            country_code,
            token
        })
        if (!pay) res.status(400).json({ msg: 'Error recording transaction' })
        const payment = await paymentController.payment(id_params)
        if (!payment.ok) {
            res.status(400).json(payment)
        }
        res.status(200).json(payment)
        // res.redirect("/payed.html");
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server error" });
    }
}]
paymentController.cancelOrder = (res) => res.redirect("/")


paymentController.payment = async (id) => {
    try {
        const schedule = await ScheduledPaymentModel.findOne({ where: { id, is_pagado: false } })
        if (!schedule) return { ok: false, msg: 'Payment not found' }

        schedule.is_pagado = true;
        schedule.update_at = Date.now();

        await schedule.save()
        const resp = await paymentController.subscribe(id)
        if (!resp.ok) return resp
        return { ok: true, msg: 'Payment made,' + resp.msg }

    } catch (error) {
        return { ok: false, msg: error }
    }
}
paymentController.subscribe = async (id) => {
    try {
        const subscribe = await SuscripcionModel.findOne({ where: { id_suscripcion: id } })
        if (!subscribe) return { ok: false, msg: 'Subcrition not found' }

        subscribe.is_active = true;

        await subscribe.save()
        return { ok: true, msg: 'Subcrition active' }
    } catch (error) {
        return { ok: false, msg: error }

    }
}



export default paymentController;

