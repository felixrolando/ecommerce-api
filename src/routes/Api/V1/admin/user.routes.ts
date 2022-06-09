import { Router } from 'express'
import Container from 'typedi'
import authMiddleware from '../../../../middleware/authMiddleware'
import { UserController } from '../../../../controllers/UserController'

const router = Router()
const user = Container.get(UserController)

router.route('/admin/user')
    .get(authMiddleware, (req, res) => user.get(req, res))
    .post((req, res) => user.createUser(req, res))

export default router
