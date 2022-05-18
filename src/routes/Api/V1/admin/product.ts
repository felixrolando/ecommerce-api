import express from 'express'
import Container from 'typedi'
import ProductController from '../../../../controllers/ProductController'

const router = express.Router()
const product = Container.get(ProductController)

router.get('/product', (req, res) => product.getProducts(req, res))
router.post('/product', (req, res) => product.saveProducts(req, res))

export default router
