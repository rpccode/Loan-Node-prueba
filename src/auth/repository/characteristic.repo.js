import { sequelizeInstance } from "../../config";
import { CaracteristicasModel, Plan_caracteristicasModel } from "../models";


let characteristicRepo = {};

characteristicRepo.createCharacteristic = async (data, plan_id) => {
    const t = await sequelizeInstance.transaction();
    try {
        const resp = await CaracteristicasModel.create(data)
        if (!resp) return { ok: false, msg: 'No se puedo crear la caracteristica' }

        const caract_plan = await Plan_caracteristicasModel.create({
            características: resp.id,
            plan_id: plan_id
        }, { transaction: t })
        if (!caract_plan) return { ok: false, msg: 'No se puedo asociar la caracteristica al plan' }
        await t.commit();
        return { ok: true, msg: 'Caracteristica Creada correctamente' }
    } catch (error) {
        console.log(error)
        await t.rollback();
        return { ok: false, msg: 'Error al Generar la Caracteristica' }

    }
}
characteristicRepo.updateCharacteristic = async (data) => {
    const t = await sequelizeInstance.transaction();

    try {

        const characteristic = await CaracteristicasModel.findOne({
            where: { características_id: data.características_id }
        })
        if (!characteristic) return {
            ok: false, msg: `No se encontro Caracteristica con este ${data.características_id}`
        }

        const updateDate = await characteristic.update(data, {
            where: {
                características_id: data.características_id
            }
        })
        if (updateDate) return { ok: false, msg: 'No se pudo Modificar  la Caracteristica' }

        await t.commit();
        return { ok: true, msg: 'Caracteristica Modificada Correctamente' }
    } catch (error) {
        console.log(error)

        await t.rollback();
        return { ok: false, msg: 'Error al Modificar  la Caracteristica' }
    }
}
characteristicRepo.findAllCharacteric = async (planId) => {
    const t = await sequelizeInstance.transaction();
    try {

        const plan = await PlanModel.findByPk(planId, {
            include: [
                {
                    model: Plan_caracteristicasModel,
                    include: [CaracteristicasModel], // Incluye el modelo de características
                },
            ],
            transaction: t, // Pasa la transacción como parte de la consulta
        });

        if (!plan) {
            await transaction.rollback();
            return { ok: false, msg: 'El plan no fue encontrado' }
        }
        await t.commit();
        return { ok: true, data: plan }
    } catch (error) {
        console.log(error)
        await t.rollback();
        return { ok: false, msg: 'Error al Modificar  la Caracteristica' }
    }
}





export default characteristicRepo;