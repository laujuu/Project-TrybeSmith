import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces/IUsers';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  async createUser(user: IUsers) {
    const { username, classe, level, password } = user;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: insertId, ...user };
  }
} 