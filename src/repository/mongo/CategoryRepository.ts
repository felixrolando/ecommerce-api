import { Service } from 'typedi'
import { ICategory } from '../../interface/ICategory'
import CategoryModel from '../../models/mongo/category.model'
import { ICategoryRepository } from '../ICategoryRepository'

@Service()
class CategoryRepository implements ICategoryRepository {
    async save(data: ICategory): Promise<ICategory> {
        const category = new CategoryModel(data)
        await category.save()
        return category
    }
}

export default CategoryRepository
