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
      host: "localhost",
      user: "root",
      password: "",
      database: "gasolina_rd",
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
