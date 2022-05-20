import express from 'express'
import productRouter from './admin/product.routes'
import userRouter from './admin/user.routes'

const indexRouterV1 = express.Router()

indexRouterV1.use(productRouter)
indexRouterV1.use(userRouter)

export default indexRouterV1
