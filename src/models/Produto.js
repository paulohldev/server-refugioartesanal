const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../sql');
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
    sequelize,
  },
);

Produto.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
  as: 'categoria',
});

(async () => {
  try {
    await sequelize.sync();
    // console.log(sequelize);
    // association();
    // console.log('Model synchronized with database');
  } catch (error) {
    console.error('Error synchronizing model:', error);
  }
})();

module.exports = Produto;
