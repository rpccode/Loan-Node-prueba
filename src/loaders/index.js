

import expressLoader from "./express.loader"
import schemaLoader from "./schema.loader"
import sequelizeLoader from "./sequelize.loader"
/**
 * Inicializa la aplicación Express y carga las rutas.
 * @param {Object} options - Opciones de configuración.
 * @param {Object} options.expressApp - Instancia de Express.
 * @param {Object} options.sequelizeInstance - Instancia de Sequelize para verificar el esquema.
 * @param {Array} options.appRoutes - Array de objetos de ruta para cargar.
 */
export default {
    init: async ({ expressApp = null, appRoutes = null, sequelizeInstance = null }) => {
        // Verifica el esquema de la base de datos
        // console.log(sequelizeInstance);
        const verify = await schemaLoader(sequelizeInstance)

        // console.log(verify);
        // Si el esquema se ha verificado con éxito, carga Sequelize y Express
        if (verify) {
            await sequelizeLoader(sequelizeInstance)
        }

        // Carga las rutas en la aplicación Express
        // console.log(appRoutes);
        await expressLoader(expressApp, appRoutes)
    }
}