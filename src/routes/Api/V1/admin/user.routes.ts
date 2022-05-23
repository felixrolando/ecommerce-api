import { Router } from 'express'
import Container from 'typedi'
import { UserController } from '../../../../controllers/UserController'

const router = Router()
const user = Container.get(UserController)

router.post('/user', (req, res) => user.createUser(req, res))

export default router
