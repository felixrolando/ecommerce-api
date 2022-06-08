import { Service } from 'typedi'
import { IBrand } from '../../interface/IBrand'
import BrandModel from '../../models/mongo/brand.model'
import { IBrandRepository } from '../IBrandRepository'

@Service()
class BrandRepository implements IBrandRepository {
    async save(data: IBrand): Promise<IBrand> {
        const brand = new BrandModel(data)
        await brand.save()
        return brand
    }
}

export default BrandRepository
