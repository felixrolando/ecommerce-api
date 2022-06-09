import { Service } from "typedi";
import { IBrand } from "../../interface/IBrand";
import { V1Api } from "../api/V1Api";
import HttpInstance from "../HttpInstance";
import { IResponse } from "../IResponse";

@Service()
export class BrandService {

    async getAllBrands() {
        const business_id = process.env.BUSINESS_INTEGRATION_ID as any
        return await HttpInstance.getInstance<IResponse<IBrand[]>>(V1Api.brands.getAllBrand(business_id))
    }

}