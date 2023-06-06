const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sql");

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
