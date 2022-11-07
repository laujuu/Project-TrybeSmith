import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUsers } from '../interfaces/IUsers';
import UserModel from '../models/users.model';

dotenv.config();

export default class JwtUtils {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public createToken(user: IUsers) {
    const payload = { 
      id: user.id, 
      username: user.username, 
      classe: user.classe, 
      level: user.level, 
    };
    const token = this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
            
    return token;
  }
}
