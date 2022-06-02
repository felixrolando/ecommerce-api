import { Schema, model } from 'mongoose'
import { IUser } from '../../interface/IUser'

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: false },
    phone: { type: String, required: false },
    customerId: { type: Number, required: false }
})

export default model<IUser>('Users', userSchema)
