const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const Produto = require('./Produto');

class Pedido extends Model {}

Pedido.init(
  {
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
  },

  {
    timestamps: false,
    tableName: 'pedidos',
    sequelize,
  },
);

Pedido.belongsTo(Produto, {
  foreignKey: 'Produto_id',
  as: 'Produto',
});

(async () => {
  try {
    await sequelize.sync({
      logging: false,
    });
  } catch (error) {
    console.error('O model pedido não foi inicializado.', error);
  }
})();

module.exports = Pedido;