import express from 'express'
import ProductController from '../../../../controllers/productController'

const router = express.Router()

router.get('/product', ProductController.getProducts)
router.post('/product', ProductController.saveProducts)

export default router
