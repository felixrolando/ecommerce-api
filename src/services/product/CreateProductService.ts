import { Service } from 'typedi'

@Service()
class CreateProductService {
  execute (): any {
    console.log('felix createUserService')
  }
}

export default CreateProductService
