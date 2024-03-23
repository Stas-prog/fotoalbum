import Router from 'express'
const router = new Router()
import userController from '../controllers/userController.js'
import checkAuth from '../middlewares/checkAuth.js'


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', checkAuth, userController.check)



export default router