const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const Categoria = require('./Categoria');
const Usuario = require('./Usuario');
const multerConfig = require('../config/multerConfig');

const Produto = sequelize.define(
  'produtos',
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
    originalname: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Campo não pode ficar vazio.',
        },
      },
    },
    filename: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Campo não pode ficar vazio.',
        },
      },
    },
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `http://localhost:3000/images/${this.getDataValue('filename')}`;
      },
    },
    categoria_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false },
);

Produto.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
  as: 'categoria',
});

// (async () => {
//   try {
//     await sequelize.sync({
//       logging: false,
//     });
//   } catch (error) {
//     console.error('O model Categoria não foi inicializado.', error);
//   }
// })();

module.exports = Produto;
