import { RowDataPacket } from 'mysql2';
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
} 