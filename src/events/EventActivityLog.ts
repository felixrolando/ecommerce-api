import { IActivityLog } from "../interface/IActivityLog";
import { IEvent } from "../interface/IEvent"
import { Container } from 'typedi'
import { CreateActivityLogService } from "../services/activityLog/CreateActivityLogService";

const createActivityLogService = Container.get(CreateActivityLogService)

class EventActivityLog implements IEvent<IActivityLog> {

    execute(data: IActivityLog): void {
        createActivityLogService.execute(data)
    }

}

export default new EventActivityLog();