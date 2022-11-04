import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProducts } from '../interfaces/IProducts';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  async getAll(): Promise<IProducts[]> {
    const [rows] = await this.connection.execute<IProducts[] & RowDataPacket[]>(`
        SELECT * FROM Trybesmith.Products
        `);
    return rows;
  }

  async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  }
} 