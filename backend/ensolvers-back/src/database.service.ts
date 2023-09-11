import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2';

@Injectable()
export class DatabaseService {
  private connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
  }


}
