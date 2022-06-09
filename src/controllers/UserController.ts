import { Request, Response } from "express";
import { Service } from "typedi";
import { ActivityLogHelper } from "../helpers/ActivityLogHelper";
import { CreateUserService } from "../services/user/CreateUserService";
import { registerUserValidator } from "../validator/user/userValidators";
import { validateRequestFactory } from "../validator/validateRequestFactory";

@Service()
export class UserController {
  constructor(private readonly createUserService: CreateUserService) { }
  @validateRequestFactory(registerUserValidator)
  async createUser(req: Request, res: Response): Promise<Response> {
    const { user, password, name, email }: any = req.query;
    const userCreated = await this.createUserService.execute({
      email: email,
      user: user,
      name: name,
      password: password,
    });
    ActivityLogHelper.logServerEmit(
      "UserController",
      "createUser",
      "add",
      user
    );
    return res.json(userCreated);
  }
  get(req: Request, res: Response): Response {
    return res.status(200).send("Welcome 🙌 ");
  }
}
