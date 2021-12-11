//aplicação de contrutor privado para implementar um singleton

export class Database {
  private static database: Database;

  private constructor(
    //construtor privado!!
    private host: string,
    private user: string,
    private password: string
  ) {}

  // Factory Method usado pra criar o singleton
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(
      `Conectado com host: ${this.host} \nUser: ${this.user} | Pass: ${this.password}`
    );
  }
}

// const db1 = new Database('localhost', 'root', '123456'); //criando conexão antes do singleton
const db1 = Database.getDatabase('localhost', 'root', '123456'); //criando conexão com o singleton
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2); //entrega a mesma database
