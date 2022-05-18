import { Request, Response } from 'express'
import { Service } from 'typedi'
import CreateUserService from '../services/user/CreateUserService'

@Service()
class UserController {
  constructor (private readonly createUserService: CreateUserService) { }
  createUser (req: Request, res: Response): Response {
    this.createUserService.execute()
    return res.json({ message: req.query })
  }
}

export default UserController
