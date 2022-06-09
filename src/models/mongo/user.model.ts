import { Schema, model } from 'mongoose'
import { IUser } from '../../interface/IUser'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  user: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: false, default: null },
  phone: { type: String, required: false, unique: true, default: null },
  customerId: { type: Number, required: false, default: 0 },
  password: { type: String },
  token: { type: String },
}, { timestamps: true })

export default model<IUser>('Users', userSchema)
