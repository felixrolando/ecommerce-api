import cron from 'node-cron';
import { EVERY_30_SECONDS } from './scheduleConstants';

export default () => {
    cron.schedule(EVERY_30_SECONDS, function () {
        console.log('running a task EVERY_30_SECONDS');
    })
}