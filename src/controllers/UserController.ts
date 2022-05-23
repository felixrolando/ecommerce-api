import { Request, Response } from 'express'
import { Service } from 'typedi'
import { CreateUserService } from '../services/user/CreateUserService'

@Service()
export class UserController {
  constructor(private readonly createUserService: CreateUserService) { }

  createUser(req: Request, res: Response): Response {
    try {
      this.createUserService.execute({ email: 'roland@hot', name: 'felix', avatar: 'photo', customerId: 5, phone: '809' })
    } catch (error) {
      console.log(error)
    }
    return res.send('Hello response!')
  }
}
