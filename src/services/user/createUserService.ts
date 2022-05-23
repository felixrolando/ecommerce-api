import { Service } from 'typedi'
import { IUser } from '../../interface/IUser'
import { IUserRepository } from '../../repository/IUserRepository'
import UserRepository from '../../repository/mysql/UserRepository'

@Service()
class CreateUserService {
  private readonly userRepository: IUserRepository
  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute (user: IUser): Promise<IUser> {
    return await this.userRepository.save(user)
  }
}

export default CreateUserService
