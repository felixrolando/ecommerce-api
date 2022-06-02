import { Service } from 'typedi'
import { IUser } from '../../interface/IUser'
import { IUserRepository } from '../../repository/IUserRepository'
import UserRepository from '../../repository/mongo/UserRepository'

@Service()
export class CreateUserService {
  private readonly userRepository: IUserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(user: IUser): Promise<IUser> {
    return await this.userRepository.save(user)
  }
}
