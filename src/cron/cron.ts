import cron from 'node-cron';
import BrandService from '../httpClient/services/BrandService';
import { EVERY_30_SECONDS } from './scheduleConstants';

export default () => {
    cron.schedule(EVERY_30_SECONDS, function () {
        console.log('running a task EVERY_30_SECONDS');
        BrandService.getAllBrands().then(response => {
            console.log(response.data)
        })
    }
        // , {
        //     scheduled: true,
        //     timezone: 'America/Santo_Domingo'
        // }
    )
}