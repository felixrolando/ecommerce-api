import { Service } from "typedi";
import { IBrand } from "../../interface/IBrand";
import BrandRepository from "../../repository/mongo/BrandRepository";

@Service()
export class CreateBrandService {
    constructor(private readonly brandRepository: BrandRepository) { }

    async execute(data: IBrand): Promise<IBrand> {
        return await this.brandRepository.save(data);
    }
}
