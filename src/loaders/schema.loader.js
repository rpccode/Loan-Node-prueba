/**
 * Verifica si existe el esquema 'accounts' en la base de datos Sequelize.
 * Si no existe, crea el esquema 'accounts'.
 * @param {Object} sequelizeInstance - Instancia de Sequelize.
 * @returns {boolean} - True si se creó el esquema, de lo contrario, False.
 */
export default async function schemaLoader(sequelizeInstance) {
    // Verifica que la instancia de Sequelize no sea nula o indefinida
    if (!sequelizeInstance) throw new Error('La instancia de Sequelize es nula o indefinida')

    let schemaCreated = false

    // console.log(await sequelizeInstance.showAllSchemas({ logging: false }));
    // Verifica si el esquema 'accounts' existe, si no, lo crea
    await sequelizeInstance.showAllSchemas({ logging: false })
        .then(async data => {
            if (!data.includes('accounts')) {
                await sequelizeInstance.createSchema('accounts')
                schemaCreated = true
            }
            schemaCreated = true
        })
        .catch(err => console.error(err))
    // console.log(schemaCreated);
    return schemaCreated
}