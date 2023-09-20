import { agregarIntervalo } from "../../helpers/fechaEnd"
import { PlanModel, SuscripcionModel } from "../models"



const suscriptionRepo = {}


suscriptionRepo.generateSuscription = async (tenantId, planId, tipo) => {

    let valor = 0
    try {
        const plan = await PlanModel.findOne({ where: { id: planId } })
        // console.log(plan.dataValues)
        if (!plan) throw new Error('El plan no Existe');
        if (tipo === 'A') {
            valor = plan.dataValues.precio_anual
        } else {
            valor = plan.dataValues.precio_mensual
        }
        await SuscripcionModel.create({
            tenant_id: tenantId,
            plan_id: planId,
            tipo,
            valor,
            end_date: agregarIntervalo(Date.now(), tipo, 1)
        })
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}



export default suscriptionRepo;