import JwtUtils from '../utils/jwt.util';
import { IUsers } from '../interfaces/IUsers';
import UsersModel from '../models/users.model';

export default class ProductsService {
  public users = new UsersModel();

  public jwtutils = new JwtUtils();

  public async createUsers(user: IUsers) {
    const createUsers = await this.users.createUser(user);
    const token = this.jwtutils.createToken(createUsers);
    return token;
  }
}