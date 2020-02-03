import Sequelize from "sequelize";
import User from "../app/models/User";
import Recipient from "../app/models/Recipient";
import databaseConfig from "../config/database";

const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
  }

  // Conexão com o banco e carregar os models
  init() {
    this.connections = new Sequelize(databaseConfig); // A partir desse momento ja tenho a conexao com a BD
    // Essa variável this.connection é a variavel esperada lá dentro do models > User dentro do init

    // Percorro todos os models passando a conexão para o método init
    models.map(model => model.init(this.connections));
  }
}

export default new Database();
