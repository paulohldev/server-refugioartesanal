const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Produto = require('./Produto');

const Pedido = sequelize.define('pedidos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  pedido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  produto_id: {
    type: DataTypes.INTEGER,
  },
  usuario_id: {
    type: DataTypes.INTEGER
  }
}, { timestamps: false })

Pedido.belongsTo(Produto, {
  foreignKey: 'produto_id',
  as: 'produto',
})
module.exports = Pedido;