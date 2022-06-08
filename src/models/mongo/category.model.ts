import { Schema, model } from 'mongoose'
import { ICategory } from '../../interface/ICategory'

const categorySchema = new Schema<ICategory>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    short_code: { type: String, required: true }
}, { timestamps: true })

export default model<ICategory>('Categorys', categorySchema)
