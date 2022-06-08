import { Service } from "typedi";
import { ICategory } from "../../interface/ICategory";
import CategoryRepository from "../../repository/mongo/CategoryRepository";

@Service()
export class CreateCategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) { }

    async execute(data: ICategory): Promise<ICategory> {
        return await this.categoryRepository.save(data);
    }
}
