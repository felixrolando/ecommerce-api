import { Schema, model } from 'mongoose'
import { IUser } from '../../interface/IUser'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: false },
  phone: { type: String, required: false, unique: true },
  customerId: { type: Number, required: false },
  password: { type: String },
  token: { type: String },
}, { timestamps: true })

export default model<IUser>('Users', userSchema)
