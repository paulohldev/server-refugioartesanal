const categoriaJson = require('../models/categorias.json');

// Método para listar todas as categorias do arquivo json
const findAll = async () => {
  try {
    return await categoriaJson;
  } catch (error) {
    return error;
  }
};

// Método para listar uma categoria do arquivo json
const findOne = async (id) => {
  try {
  
    return await categoriaJson.filter((categoria) => categoria.id == id);
  } catch (error) {
    return error;
  }
};

// Método para adicionar uma categoria (não salva no arquivo json), é um exemplo
const create = async (dados) => {
  try {
    await categoriaJson.push(dados);
    return categoriaJson;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findAll,
  findOne,
  create,
};
