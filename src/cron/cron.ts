import cron from 'node-cron';
import { Container } from "typedi";
import { CreateBrandCommand } from './Commands/CreateBrandCommand';
import { EVERY_30_SECONDS } from './scheduleConstants';

const createBrandCommand = Container.get(CreateBrandCommand)

export default () => {
    cron.schedule(EVERY_30_SECONDS, async () => {
        console.log('running a task EVERY_30_SECONDS');
        await createBrandCommand.handle()

    }
        // , {
        //     scheduled: true,
        //     timezone: 'America/Santo_Domingo'
        // }
    )
}