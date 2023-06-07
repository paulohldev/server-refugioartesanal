const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('refugioartesanal', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true,
});

module.exports = sequelize;
