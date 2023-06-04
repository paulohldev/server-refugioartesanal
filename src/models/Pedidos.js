const pedidosJson = require('./pedidos.json');

const findAll = async () => {
  try {
    return await pedidosJson;
  } catch (error) {
    return error;
  }
};

const findOne = async (id) => {
  try {
    return await pedidosJson.filter((categoria) => categoria.id == id);
  } catch (error) {
    return error;
  }
};

const create = async (dados) => {
  try {
    await pedidosJson.push(dados);
    return pedidosJson;
  } catch (error) {
    return error;
  }
};

const destroy = async (id) => {
  try {
    const novosRegistros = await pedidosJson.filter(
      (Pedidos) => Pedidos.id != id,
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