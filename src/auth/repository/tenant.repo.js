import { sequelizeInstance } from "../../config"
import initModels from "../../modules/models/init-models"
import { TenantModel, TenantUserModel } from "../models"


const tenantRepo = {}

/**
 * Genera un esquema en la base de datos si no existe.
 * @param {string} schemaName - Nombre del esquema a generar.
 * @returns {boolean} - True si se creó el esquema, de lo contrario, False.
 */
tenantRepo.generateSchema = async schemaName => {
    let schemaCreated = false
    // Verifica si el esquema ya existe en la base de datos
    await sequelizeInstance.showAllSchemas({ logging: false })
        .then(async data => {

            if (!data.includes(schemaName)) {
                // Si no existe, crea el esquema
                await sequelizeInstance.createSchema(schemaName)
                await initModels(schemaName)
                schemaCreated = true
            }
        })
        .catch(err => console.error(err))

    return schemaCreated
}

/**
 * Registra un inquilino en la base de datos.
 * @param {string} schemaName - Nombre del esquema del inquilino.
 * @returns {Object} - Objeto que contiene el ID del inquilino registrado.
 */
tenantRepo.registerTenant = async schemaName => {
    const tenant = await TenantModel.create({ schema_name: schemaName })
    return { tenantId: tenant.id }
}

/**
 * Vincula un esquema de inquilino a un usuario.
 * @param {number} userId - ID del usuario.
 * @param {number} tenantId - ID del inquilino.
 */
tenantRepo.bindSchemaToUser = async (userId, tenantId) => {
    await TenantUserModel.create({
        fk_tenant: tenantId,
        fk_user: userId
    })
}

export default tenantRepo