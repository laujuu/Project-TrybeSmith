import { Request, Response } from 'express';

import OrdersService from '../services/orders.service';

const OK_STATUS = 200;

export default class ProductsController {
  public ordersService = new OrdersService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.ordersService.getAll();
        
    res.status(OK_STATUS).json(orders);
  }
}