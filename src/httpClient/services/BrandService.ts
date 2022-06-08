import { Service } from "typedi";
import { IBrand } from "../../interface/IBrand";
import httpInstance from "../HttpInstance";

@Service()
export class BrandService {

    async getAllBrands(): Promise<IBrand[] | any> {
        try {
            const params = {
                business_id: process.env.BUSINESS_INTEGRATION_ID
            }
            return await httpInstance.get<IBrand[]>('brandForCreate', { params })
        } catch (error: any) {
            const { data } = httpInstance.getErrorData(error);
        }
    }

}