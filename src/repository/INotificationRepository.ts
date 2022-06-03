import { INotification } from '../interface/INotification'

export interface INotificationRepository {
    save: (data: INotification) => Promise<INotification>
}
