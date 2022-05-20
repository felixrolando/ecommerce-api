import { Service } from 'typedi'
import UserModel from '../../models/mongo/user.model'

@Service()
class CreateUserService {
  async execute(): Promise<any> {
    console.log('felix createUserService')
    const user = new UserModel({
      name: 'Bill',
      email: 'bill@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png'
    })
    await user.save()
  }
}

export default CreateUserService
