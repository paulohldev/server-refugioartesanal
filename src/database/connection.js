const { Sequelize } = require('sequelize');
const database = require('../config/database');

const sequelize = new Sequelize(database);

module.exports = sequelize;
