import { Request, Response } from 'express'
import { Service } from 'typedi'
import { WebSocketEvents, WebSocket } from '../helpers/WebSocket'
import { CreateUserService } from '../services/user/CreateUserService'
import { registerUserValidator } from '../validator/user/userValidators'
import { validateRequestFactory } from '../validator/validateRequestFactory'

@Service()
export class UserController {
  constructor(private readonly createUserService: CreateUserService) { }
  @validateRequestFactory(registerUserValidator)
  createUser(req: Request, res: Response): Response {
    this.createUserService.execute({ email: 'roland@hot', name: 'felix', avatar: 'photo', customerId: 5, phone: '809' })
    return res.send('Hello response!')
  }
  get(req: Request, res: Response): Response {
    const socket = WebSocket.getInstance();
    socket.sendEventByUserId('2', WebSocketEvents.Notification, 'hola como estas')
    return res.send('Hello response get!')
  }
}
