import { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response): Response => {
  return res.json({ message: 'get products' })
}

export const saveProducts = (req: Request, res: Response): Response => {
  return res.json({ message: 'save products' })
}
