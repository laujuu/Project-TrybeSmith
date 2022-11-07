import { Request, Response } from 'express';

import UsersService from '../services/users.service';

const CREATED_STATUS = 201;

export default class ProductsController {
  public usersService = new UsersService();

  async createUser(req: Request, res: Response) {
    const user = req.body;

    const token = await this.usersService.createUsers(user);
    res.status(CREATED_STATUS).json({ token });
  }
}