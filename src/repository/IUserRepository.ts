import { IUser } from '../interface/IUser'

export interface IUserRepository {
  save: (data: IUser) => Promise<IUser>
}
