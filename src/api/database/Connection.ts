import mysql from "mysql";

class Connection {
  static #instance: Connection;

  private connection: mysql.Connection;

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
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "gasolina_rd",
    });
  }

  public getConnection() {
    return this.connection;
  }

  public connect() {
    this.connection.connect((err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected!");
      }
    });
  }

  public disconnect() {
    this.connection.end();
  }

  public query(query: string, callback: any) {
    this.connection.query(query, callback);
  }
}

export default Connection;
