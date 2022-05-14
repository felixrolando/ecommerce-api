import express from 'express'
import { getProducts, saveProducts } from '../../../../controllers/productController'

const router = express.Router()

router.get('/product', getProducts)
router.post('/product', saveProducts)

export default router
