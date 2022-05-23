import { Service } from 'typedi'
import { AppDataSource } from '../../data-source'
import { IUser } from '../../interface/IUser'
import { User } from '../../models/mysql/user.model'
import { IUserRepository } from '../IUserRepository'

@Service()
class UserRepository implements IUserRepository {
  private readonly userRepository = AppDataSource.getRepository(User)

  async save(data: IUser): Promise<IUser> {
    return this.userRepository.create(data)
  }
}

export default UserRepository
