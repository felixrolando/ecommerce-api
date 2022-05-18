import { Request, Response } from 'express'

class ProductController {
  getProducts (req: Request, res: Response): Response {
    return res.json({ message: req.query })
  }

  saveProducts = (req: Request, res: Response): Response => {
    return res.json({ message: 'save products' })
  }
}

export default new ProductController()
