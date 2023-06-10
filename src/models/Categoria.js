const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Categoria extends Model {}
Categoria.init(
  {
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
  },
  {
    timestamps: false,
    tableName: 'categorias',
    sequelize,
  },
);

(async () => {
  try {
    await sequelize.sync({
      logging: false,
    });
  } catch (error) {
    console.error('O model Categoria não foi inicializado.', error);
  }
})();

module.exports = Categoria;
