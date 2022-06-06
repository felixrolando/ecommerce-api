import { EventEmitter } from 'events'
import EventActivityLog from './EventActivityLog';
import EventNotification from './EventNotification';

class Events extends EventEmitter {

    constructor() {
        super();
    }

}

const events = new Events();

events.on('notification', EventNotification.execute)
events.on('activityLog', EventActivityLog.execute)

export default events