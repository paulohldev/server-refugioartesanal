const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('refugioartesanal', 'aluno', 'ifpe2023', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  async function teste(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  };

  teste();