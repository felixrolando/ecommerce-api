import { IActivityLog } from '../interface/IActivityLog'

export interface IActivityLogRepository {
    save: (data: IActivityLog) => Promise<IActivityLog>
}
