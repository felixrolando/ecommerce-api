import { Router } from 'express'
import Container from 'typedi'
import ProductController from '../../../../controllers/ProductController'

const router = Router()
const product = Container.get(ProductController)

router
  .route('/admin/product')
  .get((req, res) => product.getProducts(req, res))
  .post((req, res) => product.saveProducts(req, res))

export default router
