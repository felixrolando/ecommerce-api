import { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response): void => {
  res.send('get products felix')
}

export const saveProducts = (req: Request, res: Response): void => {
  res.send('save products')
}
