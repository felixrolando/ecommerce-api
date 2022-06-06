import { Schema, model } from 'mongoose'
import { IActivityLog } from '../../interface/IActivityLog'

const activityLogSchema = new Schema<IActivityLog>({
    context: { type: String, required: true },
    data: { type: Array, required: true },
    function: { type: String, required: true },
    date: { type: Date, required: true },
    action: { type: String, enum: ['search', 'add', 'edit', 'delete'], required: true },
    from: { type: String, enum: ['server', 'client'], required: true },
    serverResponse: { type: String, enum: ['server', 'client'], required: false }
})

export default model<IActivityLog>('ActivityLogs', activityLogSchema)
