import { Service } from 'typedi'
import { IActivityLog } from '../../interface/IActivityLog'
import { IActivityLogRepository } from '../IActivityLogRepository'
import ActivityModel from '../../models/mongo/activity.model'

@Service()
class ActivityLogRepository implements IActivityLogRepository {
    async save(data: IActivityLog): Promise<IActivityLog> {
        const logger = new ActivityModel(data)
        await logger.save()
        return logger
    }
}

export default ActivityLogRepository
