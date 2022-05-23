import { Request, Response } from 'express'
import { Service } from 'typedi'
import CreateUserService from '../services/user/CreateUserService'

@Service()
export class UserController {
  constructor (private readonly createUserService: CreateUserService) { }

  createUser (request: Request, response: Response): Response {
    try {
      this.createUserService.execute({ email: 'dfdf', name: 'dsfsd', avatar: 'sdf', customerId: 5, phone: 'sdf' })
    } catch (error) {
      console.log(error)
    }
    return response.send('Hello response!')
  }
}
