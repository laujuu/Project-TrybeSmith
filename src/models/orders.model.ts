import { RowDataPacket } from 'mysql2';
import { IOrders } from '../interfaces/IOrders';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  async getAll(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(`
    SELECT orders.id, orders.userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS product
    ON orders.id = product.orderId
    GROUP BY orders.id
        `);
    return rows;
  }
} 