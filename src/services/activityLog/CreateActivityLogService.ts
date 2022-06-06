import { Service } from 'typedi'
import { IActivityLog } from '../../interface/IActivityLog'
import { IActivityLogRepository } from '../../repository/IActivityLogRepository'
import ActivityLogRepository from '../../repository/mongo/ActivityLogRepository'

@Service()
export class CreateActivityLogService {
    private readonly activityRepository: IActivityLogRepository
    constructor(activityRepository: ActivityLogRepository) {
        this.activityRepository = activityRepository
    }

    async execute(activity: IActivityLog): Promise<IActivityLog> {
        return await this.activityRepository.save(activity)
    }
}