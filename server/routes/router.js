import Router from "express"
const router = new Router()
import userRouter from "./userRouter.js"
import fotoRouter from "./fotoRouter.js"
import yearRouter from "./yearRouter.js"
import placeRouter from "./placeRouter.js"

router.use('/user', userRouter)
router.use('/foto', fotoRouter)
router.use('/year', yearRouter)
router.use('/place', placeRouter)

export default router