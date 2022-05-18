import express from 'express'
import Container from 'typedi'
import productController from '../../../../controllers/productController'

const router = express.Router()
const product = Container.get(productController)

router.get('/product', (req, res) => product.getProducts(req, res))
router.post('/product', (req, res) => product.saveProducts(req, res))

export default router
