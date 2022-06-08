import { IBrand } from '../interface/IBrand'

export interface IBrandRepository {
    save: (data: IBrand) => Promise<IBrand>
}
