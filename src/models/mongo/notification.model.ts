import { Schema, model } from 'mongoose'
import { INotification } from '../../interface/INotification'

const notificationSchema = new Schema<INotification>({
    id: { type: String, required: true },
    date: { type: String, required: true },
    icon: { type: String, required: true },
    msg: { type: String, required: true },
    status: { type: String, required: true },
    title: { type: String, required: true }
})

export default model<INotification>('Notifications', notificationSchema)
