import { IEvent } from "../interface/IEvent"
import { INotification } from "../interface/INotification"

class EventNotification implements IEvent<INotification> {

    execute(data: INotification): void {
        console.log('hola desde notification', data)
    }


}

export default new EventNotification();