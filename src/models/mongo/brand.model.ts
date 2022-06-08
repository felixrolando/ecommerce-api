import { Schema, model } from 'mongoose'
import { IBrand } from '../../interface/IBrand'

const brandSchema = new Schema<IBrand>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true })

export default model<IBrand>('Brands', brandSchema)
