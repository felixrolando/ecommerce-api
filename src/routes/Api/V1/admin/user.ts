import express from 'express'
import Container from 'typedi'
import userController from '../../../../controllers/userController'

const router = express.Router()
const user = Container.get(userController)

router.post('/user', (req, res) => user.createUser(req, res))

export default router
