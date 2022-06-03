import { Service } from 'typedi'
import { INotification } from '../../interface/INotification'
import { INotificationRepository } from '../../repository/INotificationRepository'
import NotificationRepository from '../../repository/mongo/NotificationRepository'

@Service()
export class CreateNotificationService {
    private readonly notificationRepository: INotificationRepository

    constructor(notificationRepository: NotificationRepository) {
        this.notificationRepository = notificationRepository
    }

    async execute(): Promise<INotification> {
        const data: INotification = {
            date: 'fecha',
            icon: 'check',
            msg: 'asdasd',
            status: 'done',
            title: 'title'

        }
        console.log('listener  asdadasdasd')

        return await this.notificationRepository.save(data)
    }
};