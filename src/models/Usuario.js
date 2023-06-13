const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Pedido = require('./Pedido');
const Produto=require('./Produto');

const Usuario = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isArtesao: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { timestamps: false })


Usuario.hasMany(Pedido, {
  foreignKey: 'usuario_id'
})
Usuario.hasMany(Produto,{
  foreignkey: 'produto_id',
  as:'produto'
})
module.exports = Usuario;