import { Request, Response } from 'express';

import ProductsService from '../services/products.service';

const OK_STATUS = 200;

export default class ProductsController {
  public productsService = new ProductsService();

  async getAll(_req: Request, res: Response) {
    const products = await this.productsService.getAll();
        
    res.status(OK_STATUS).json(products);
  }
}