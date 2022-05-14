import express from 'express'
import productRouter from './admin/product'

const indexRouterV1 = express.Router()

indexRouterV1.use(productRouter)

export default indexRouterV1
