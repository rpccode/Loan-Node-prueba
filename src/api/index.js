import { constants } from "../config"
import authRouter from "./routers/auth.router"
import paymentRouter from "./routers/payment.router"
import testRouter from "./routers/test.router"

export default () => [
    { path: '/test', controller: testRouter },
    { path: '/auth', controller: authRouter },
    { path: '/payment/subscrition', controller: paymentRouter }
]