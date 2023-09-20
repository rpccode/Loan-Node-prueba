import { config, sequelizeInstance } from './config'
import loader from './loaders'
import express from 'express'
import api from './api'

function startServer() {
    const app = express()
    // console.log(esp);
    loader.init({
        expressApp: app,
        appRoutes: api(),
        sequelizeInstance
    })

    app.listen(config.SERVER_PORT, (err) => {
        if (err) console.error(err);
        console.log(`Server is running on Port: ${config.SERVER_PORT}`);;
    })
}

startServer()