import { EventEmitter } from 'events'
import { Service, Container } from 'typedi'
import { CreateNotificationService } from '../services/notification/CreateNotificationService'

// const events = new EventEmitter();

// events.on('USER_CREATED', CreateNotificationService.execute);

// export default events

@Service()
class Events extends EventEmitter {
    constructor(private readonly createNotificationService: CreateNotificationService) {
        super()
        this.on('USER_CREATED', this.createNotificationService.execute);
    }


}

export default Container.get(Events)