import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "gereciamento_de_usuarios",     // nome do banco
  "root",        // usuário
  "",            // senha
  {
    host: "localhost",
    dialect: "mysql", // ou postgres
    logging: false
  }
);

export default sequelize;
