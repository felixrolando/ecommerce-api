import { Router } from 'express'
import Container from 'typedi'
import ProductController from '../../../../controllers/products.controller'

const router = Router()
const product = Container.get(ProductController)

router
  .route('/admin/product')
  .get((req, res) => product.getProducts(req, res))
  .post((req, res) => product.saveProducts(req, res))

// router.get('/product', (req, res) => product.getProducts(req, res))
// router.post('/product', (req, res) => product.saveProducts(req, res))

export default router
