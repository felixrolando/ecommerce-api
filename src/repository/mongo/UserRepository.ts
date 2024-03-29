import { Service } from 'typedi'
import { IUser } from '../../interface/IUser'
import UserModel from '../../models/mongo/user.model'
import { IUserRepository } from '../IUserRepository'

@Service()
class UserRepository implements IUserRepository {
  async save(data: IUser): Promise<IUser> {
    const user = new UserModel(data)
    await user.save()
    return user
  }
}

export default UserRepository
