import { Request, Response } from 'express';

import ProductsService from '../services/products.service';

const OK_STATUS = 200;
const CREATED_STATUS = 201;

export default class ProductsController {
  public productsService = new ProductsService();

  async getAll(_req: Request, res: Response) {
    const products = await this.productsService.getAll();
        
    res.status(OK_STATUS).json(products);
  }

  async create(req: Request, res: Response) {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(CREATED_STATUS).json(productCreated);
  }
}