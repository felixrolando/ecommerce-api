import { Request, Response } from 'express'
import { Service } from 'typedi'
import { loginUserValidator } from '../validator/user/userValidators'
import { validateRequestFactory } from '../validator/validateRequestFactory'

@Service()
class ProductController {
  @validateRequestFactory(loginUserValidator)
  getProducts (req: Request, res: Response): Response {
    return res.json({ message: req.query })
  }

  saveProducts (req: Request, res: Response): Response {
    return res.json({ message: 'save products' })
  }
}

export default ProductController
