import { Service } from 'typedi'

@Service()
class CreateUserService {
  execute (): any {
    console.log('felix createUserService')
  }
}

export default CreateUserService
