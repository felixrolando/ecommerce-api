import { Service } from 'typedi'
import { IUser } from '../../interface/IUser'
import { IUserRepository } from '../../repository/IUserRepository'
import UserRepository from '../../repository/mongo/UserRepository'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

@Service()
export class CreateUserService {
  private readonly userRepository: IUserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(user: IUser): Promise<IUser> {
    const encryptedPassword = await bcrypt.hash(user.password, 10);

    const userRegister: IUser = {
      email: user.email,
      name: user.name,
      password: encryptedPassword,
      user: user.user
    }
    const userCreated = await this.userRepository.save(userRegister)
    // Create token
    const token = jwt.sign(
      { user_id: userCreated._id, },
      process.env.JWT_TOKEN_SECRET as string,
      {
        expiresIn: "2h",
        algorithm: "HS256",
      },
    );
    // save user token
    userCreated.token = token;
    return userCreated
  }
}
