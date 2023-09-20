import express from 'express'
import paymentController from '../../auth/controllers/payment/paymment.controller'

const app = express()


const paymentRouter = express.Router()

paymentRouter.post('/create-order/:id', paymentController.createOrder)
paymentRouter.get('/capture-order/:id', paymentController.captureOrder)
paymentRouter.get('/cancel-order', paymentController.cancelOrder)
export default paymentRouter;