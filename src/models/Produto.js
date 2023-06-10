const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const Categoria = require('./Categoria');

class Produto extends Model {}

Produto.init(
  {
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
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [30, 400],
          msg: 'Descrição Deve Ter Entre 30 a 400 Caracteres',
        },
      },
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
    },
  },

  {
    timestamps: false,
    tableName: 'produtos',
    sequelize,
  },
);

Produto.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
  as: 'categoria',
});

(async () => {
  try {
    await sequelize.sync({
      logging: false,
    });
  } catch (error) {
    console.error('O model Categoria não foi inicializado.', error);
  }
})();

module.exports = Produto;
