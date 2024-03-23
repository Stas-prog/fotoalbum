import Router from 'express'
const router = new Router()
import fotoController from '../controllers/fotoController.js'
import checkRole from '../middlewares/checkRole.js'
import checkAuth from '../middlewares/checkAuth.js'


router.post('/', checkRole('ADMIN'), fotoController.create)
router.get('/', fotoController.getAll)
router.get('/:id', fotoController.getOne)
router.delete('/:id', checkAuth, fotoController.delete)

export default router
