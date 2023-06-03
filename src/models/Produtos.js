const produtosJson = require('../models/produtos.json');

const findAll = async () => {
  try {
    return await produtosJson;
  } catch (error) {
    return error;
  }
};

const findOne = async (id) => {
  try {
    return await produtosJson.filter((categoria) => categoria.id == id);
  } catch (error) {
    return error;
  }
};

const create = async (dados) => {
  try {
    await produtosJson.push(dados);
    return produtosJson;
  } catch (error) {
    return error;
  }
};

const destroy = async (id) => {
  try {
    const novosRegistros = await produtosJson.filter(
      (produtos) => produtos.id != id,
    );
    return novosRegistros;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  destroy,
};