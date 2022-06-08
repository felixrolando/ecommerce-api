import { Service } from "typedi";
import { CategoryService } from "../../httpClient/services/CategoryService";
import { ICategory } from "../../interface/ICategory";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { ICommand } from "./ICommand";

@Service()
export class CreateCategoryCommand implements ICommand {
    constructor(
        private readonly createCategoryService: CreateCategoryService,
        private readonly categoryService: CategoryService
    ) { }

    async handle(): Promise<void> {
        try {
            const response = await this.categoryService.getAllCategory()

            response.data.map(async (data: ICategory) => {
                await this.createCategoryService.execute(data)
            })

        } catch (error) {
            console.log(error)
        }

    }
}
