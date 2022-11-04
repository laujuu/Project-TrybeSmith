import { IProducts } from '../interfaces/IProducts';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public products = new ProductsModel();

  public async getAll(): Promise<IProducts[]> {
    const products = await this.products.getAll();
    return products;
  }

  public async create(product: IProducts): Promise<IProducts> {
    return this.products.create(product);
  }
}