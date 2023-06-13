const { Sequelize } = require('sequelize');
const database = require('../config/database');

const connection = new Sequelize(database);

async function syncModels() {
  await connection.sync({ logging: false })
}
syncModels()

module.exports = connection;
