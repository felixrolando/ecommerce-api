import { Service } from "typedi"

@Service()
class createUserService {
  execute() {
      console.log("felix createUserService")
  }
}

export default createUserService;