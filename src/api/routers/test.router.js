import express from 'express'
import pkg from '../../../package.json'


const app = express()
app.set('pkg', pkg)


const testRouter = express.Router()

testRouter.get('/', (req, res) => {
    // const info = {
    //     appName: app.get('pkg').name,
    //     appDescription: app.get('pkg').description,
    //     appAuthor: app.get('pkg').author,
    //     appVersion: app.get('pkg').version,
    // }
    // suscriptionRepo.generateSuscription(1, 1, 'M')
    res.json('test').status(200)
})


export default testRouter;