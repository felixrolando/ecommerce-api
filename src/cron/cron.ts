import cron from 'node-cron';
import { Container } from "typedi";
import { CreateBrandCommand } from './Commands/CreateBrandCommand';
import { CreateCategoryCommand } from './Commands/CreateCategoryCommand';
import { EVERY_30_SECONDS } from './scheduleConstants';

const createBrandCommand = Container.get(CreateBrandCommand)
const createCategoryCommand = Container.get(CreateCategoryCommand)

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

    cron.schedule(EVERY_30_SECONDS, async () => {
        console.log('running a task EVERY_30_SECONDS categorys');
        await createCategoryCommand.handle()

    }
        // , {
        //     scheduled: true,
        //     timezone: 'America/Santo_Domingo'
        // }
    )
}