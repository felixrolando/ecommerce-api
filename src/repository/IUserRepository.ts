import { IUser } from "../interface/IUser";

interface IUserRepository {
    Save(user: IUser): IUser
}