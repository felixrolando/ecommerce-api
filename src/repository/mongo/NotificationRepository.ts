import { Service } from 'typedi'
import { INotification } from '../../interface/INotification'
import { INotificationRepository } from '../INotificationRepository'
import NotificationModel from '../../models/mongo/notification.model'

@Service()
class NotificationRepository implements INotificationRepository {
    async save(data: INotification): Promise<INotification> {
        const notification = new NotificationModel(data)
        await notification.save()
        return notification
    }

}

export default NotificationRepository
