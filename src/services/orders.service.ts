import { IOrders } from '../interfaces/IOrders';
import OrdersModel from '../models/orders.model';

export default class ProductsService {
  public orders = new OrdersModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.orders.getAll();
    return orders;
  }
}