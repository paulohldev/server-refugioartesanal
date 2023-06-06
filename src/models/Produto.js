const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sql");

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
      unique: true,
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
          msg: "Descrição Deve Ter Entre 30 a 400 Caracteres",
        },
      },
      allowNull: false,
    },
  },

  {
    timestamps: false,
    sequelize,
  }
);

(async () => {
  try {
    await sequelize.sync();
    console.log("Model synchronized with database");
  } catch (error) {
    console.error("Error synchronizing model:", error);
  }
})();

module.exports = Categoria;
