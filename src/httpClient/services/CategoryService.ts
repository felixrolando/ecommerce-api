import { Service } from "typedi";
import { ICategory } from "../../interface/ICategory";
import httpInstance from "../HttpInstance";

@Service()
export class CategoryService {

    async getAllCategory(): Promise<ICategory[] | any> {
        try {
            const params = {
                business_id: process.env.BUSINESS_INTEGRATION_ID
            }
            return await httpInstance.get<ICategory[]>('categoryForCreate', { params })
        } catch (error: any) {
            const { data } = httpInstance.getErrorData(error);
        }
    }

}