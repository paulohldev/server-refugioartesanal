// Propriedades e métodos do parâmetro req => http://expressjs.com/en/4x/api.html#req
// Propriedades e métodos do parâmetro res => http://expressjs.com/en/4x/api.html#res
const categoriaModel = require('../models/Categoria');

const CategoriaController = {
  listar: async (req, res) => {
    try {
      const categorias = await categoriaModel.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },

  adicionar: async (req, res) => {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res.status(400).send({ message: 'O campo não pode ser vazio.' });
      }

      const categoria = await categoriaModel.create(req.body);
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },

  buscarUm: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await categoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(400).json({ message: 'A categoria não existe.' });
      }

      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },

  atualizar: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await categoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(400).json({ message: 'A categoria não existe.' });
      }

      const categoriaAtualizada = await categoria.update(req.body);

      return res.status(200).json(categoriaAtualizada);
    } catch (error) {
      return res.status(500).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },

  deletar: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await categoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(400).json({ message: 'A categoria não existe.' });
      }

      await categoria.destroy();

      return res.status(200).json({ message: 'Categoria deletada.' });
    } catch (error) {
      return res.status(500).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },
};

module.exports = CategoriaController;
