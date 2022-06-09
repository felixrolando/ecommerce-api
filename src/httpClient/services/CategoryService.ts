import { Service } from "typedi";
import { ICategory } from "../../interface/ICategory";
import { V1Api } from "../api/V1Api";
import HttpInstance from "../HttpInstance";
import { IResponse } from "../IResponse";
@Service()
export class CategoryService {

    async getAllCategory() {
        const business_id = process.env.BUSINESS_INTEGRATION_ID as any
        return await HttpInstance.getInstance<IResponse<ICategory[]>>(V1Api.category.getAllCategory(business_id))
    }

}