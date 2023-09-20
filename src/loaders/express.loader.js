import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import path from 'path'
import express, { json, urlencoded } from 'express'
/**
 * Configura y carga middlewares y rutas en una aplicación Express.
 * @param {Object} app - Instancia de Express.
 * @param {Array} routes - Array de objetos de ruta para cargar.
 */
export default async function expressLoader(app, routes) {

    // Verifica que los argumentos sean válidos
    if (!app || !Array.isArray(routes)) throw new Error('Errores en los argumentos')

    // Configuración de middlewares
    app.use(morgan('dev'))
    app.use(json())
    app.use(urlencoded({ extended: false }))
    app.use(cors({ origin: "*" }))
    app.use(helmet())
    app.use(express.static(path.resolve('./src/public')))
    // Carga las rutas en la aplicación Express
    routes.forEach(r => {
        app.use(r.path, r.controller)
    })
}