const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("refugioartesanal", "aluno", "ifpe2023", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
