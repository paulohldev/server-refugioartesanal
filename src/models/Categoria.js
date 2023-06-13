const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Categoria = sequelize.define('categorias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { timestamps: false })

module.exports = Categoria;
