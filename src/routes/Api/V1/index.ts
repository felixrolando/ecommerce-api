import express from 'express'
import productRouter from './admin/product'
import userRouter from './admin/user'

const indexRouterV1 = express.Router()

indexRouterV1.use(productRouter)
indexRouterV1.use(userRouter)

export default indexRouterV1
