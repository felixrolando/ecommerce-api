import { Service } from "typedi";
import { BrandService } from "../../httpClient/services/BrandService";
import { IBrand } from "../../interface/IBrand";
import { CreateBrandService } from "../../services/brand/CreateBrandService";
import { ICommand } from "./ICommand";

@Service()
export class CreateBrandCommand implements ICommand {
    constructor(
        private readonly createBrandService: CreateBrandService,
        private readonly brandService: BrandService
    ) { }

    async handle(): Promise<void> {
        try {
            const response = await this.brandService.getAllBrands()

            response.data.map(async (data: IBrand) => {
                await this.createBrandService.execute(data)
            })

        } catch (error) {
            console.log(error)
        }

    }
}
