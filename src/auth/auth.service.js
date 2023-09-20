import { sequelizeInstance } from "../config"
import signupRepo from "./repository/signup.repo"
import suscriptionRepo from "./repository/suscription.repo"
import tenantRepo from "./repository/tenant.repo"


const authService = {}
/**
 * Registra un inquilino y crea una cuenta de usuario.
 * @param {Object} data - Datos del inquilino y usuario a registrar.
 * @param {string} data.email - Correo electrónico del usuario.
 * @param {string} data.schemaName - Nombre del esquema del inquilino.
 * @param {string} data.fullname - Nombre completo del usuario.
 * @param {string} data.password - Contraseña del usuario (se almacena con hash).
 * @returns {Object} - Objeto con un mensaje de éxito.
 */

authService.registerTenant = async function (data) {
    let transaction;

    try {
        // Iniciar una transacción
        transaction = await sequelizeInstance.transaction();

        // Verificar si el usuario ya está registrado
        const exist = await signupRepo.verifyAlreadyExist(data.email, transaction);

        if (exist.ok) {
            // Si existe, hacer rollback y retornar
            await transaction.rollback();
            return { msg: exist.msg };
        }
        console.log(data.schemaName)
        // Intentar generar el esquema y verificar que se creó correctamente
        const verify = await tenantRepo.generateSchema(data.schemaName, transaction);
        console.log(verify);
        if (!verify) {
            // Si no se pudo generar el esquema, hacer rollback y retornar
            await transaction.rollback();
            return { msg: "Schema could not be generated" };
        }

        // Registrar la cuenta de usuario inquilino
        const { userId } = await signupRepo.createUserAccount(data, transaction);

        // Registrar la huella del esquema del inquilino y vincular al usuario
        const { tenantId } = await tenantRepo.registerTenant(data.schemaName, transaction);
        await tenantRepo.bindSchemaToUser(userId, tenantId, transaction);


        // Vincular al usuario al esquema creado
        const subscribe = await suscriptionRepo.generateSuscription(tenantId, data.plan, data.tipo, transaction);
        // console.log(subscribe)
        if (!subscribe) {
            // Si no se pudo generar la suscripción, hacer rollback y retornar
            await transaction.rollback();
            return { msg: "Subscription could not be generated" };
        }

        // Confirmar la transacción
        await transaction.commit();

        return { msg: 'Tenant has been registered successfully' };
    } catch (error) {
        if (transaction) {
            // En caso de error, hacer rollback
            await transaction.rollback();
        }
        // Manejar el error aquí
        throw error;
    }
}


export default authService