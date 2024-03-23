import Router from 'express'
const router = new Router()
import placeController from '../controllers/placeController.js'
import checkRole from '../middlewares/checkRole.js'
import checkAuth from '../middlewares/checkAuth.js'

router.post('/', checkRole('ADMIN'), placeController.create)
router.get('/', placeController.getAll)
router.delete('/:id', checkAuth, placeController.delete)

export default router