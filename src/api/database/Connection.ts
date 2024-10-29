import mysql from "mysql2/promise";

class Connection {
  static #instance: Connection;

  private connection: mysql.Pool;

  private constructor() {
    this.connection = this.initialize();
  }

  public static get instance(): Connection {
    if (!Connection.#instance) {
      Connection.#instance = new Connection();
    }

    return Connection.#instance;
  }

  private initialize() {
    return mysql.createPool({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
  }

  public getConnection() {
    return this.connection;
  }

  public disconnect() {
    this.connection.end();
  }

  public async query(query: string, callback?: any) {
    const result = await this.connection.query(query, callback);

    return result;
  }
}

export default Connection;
