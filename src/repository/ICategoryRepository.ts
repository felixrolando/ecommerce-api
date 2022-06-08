import { ICategory } from '../interface/ICategory'

export interface ICategoryRepository {
    save: (data: ICategory) => Promise<ICategory>
}
