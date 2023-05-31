const usuarioJson = require('../models/usuarios.json');

const findAll = async () => {
  try {
    return await usuarioJson;
  } catch (error) {
    return error;
  }
};

const findOne = async (id) => {
  try {
    return await usuarioJson.filter((categoria) => categoria.id == id);
  } catch (error) {
    return error;
  }
};

const create = async (dados) => {
  try {
    await usuarioJson.push(dados);
    return usuarioJson;
  } catch (error) {
    return error;
  }
};

const destroy = async (id) => {
  try {
    const novosRegistros = await usuarioJson.filter(
      (usuario) => usuario.id != id,
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
