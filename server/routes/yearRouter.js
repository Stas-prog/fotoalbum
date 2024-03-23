import Router from 'express'
const router = new Router()
import yearController from '../controllers/yearController.js'
import checkRole from '../middlewares/checkRole.js'
import checkAuth from '../middlewares/checkAuth.js'


router.post('/', checkRole('ADMIN'), yearController.create)
router.get('/', yearController.getAll)
router.delete('/:id', checkAuth, yearController.delete)

export default router