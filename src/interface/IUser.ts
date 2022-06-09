import { Types } from 'mongoose';

export interface IUser {
  _id?: Types.ObjectId
  name: string
  user: string
  email: string
  avatar?: string
  phone?: string
  customerId?: number
  password: string
  token?: string
}
