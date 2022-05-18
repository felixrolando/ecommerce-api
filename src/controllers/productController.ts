import { Request, Response } from 'express'
import { loginUserValidator } from '../validator/user/userValidators'
import { validateRequestFactory } from '../validator/validateRequestFactory'

class ProductController {
  @validateRequestFactory(loginUserValidator)
  getProducts(req: Request, res: Response): Response {
    return res.json({ message: req.query })
  }

  saveProducts = (req: Request, res: Response): Response => {
    return res.json({ message: 'save products' })
  }
}

export default new ProductController()
