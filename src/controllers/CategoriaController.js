// Propriedades e métodos do parâmetro req => http://expressjs.com/en/4x/api.html#req
// Propriedades e métodos do parâmetro res => http://expressjs.com/en/4x/api.html#res
const categoriaModel = require('../models/Categoria');

const CategoriaController = {
  listaCategorias: async (req, res) => {
    try {
      // Código que irá ocorrer para listar as categorias, caso haja qualquer erro irá para o código dentro do catch
      const categorias = await categoriaModel.findAll();
      return res.json(categorias);
    } catch (error) {
      // Esse bloco de código acontece apenas se o try tiver algum erro inesperado, ou esperado, criado por alguma lógica específica
      return res.json(error);
    }
  },

  addCategoria: async (req, res) => {
    try {
      await categoriaModel.create(req.body);
      return res.json(req.body);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  umaCategoria: async (req, res) => {
    try {
      const categoria = await categoriaModel.findOne(req.params.id);
      return res.json(categoria);
    } catch (error) {
      return res.json(error);
    }
  },
};

module.exports = CategoriaController;
