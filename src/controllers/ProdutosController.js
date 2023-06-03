const ProdutosModel = require('../models/Produtos');

const ProdutosController = {
  listaProdutos: async (req, res) => {
    try {
      const produtos = await ProdutosModel.findAll();
      return res.json(produtos);
    } catch (error) {
      return res.json(error);
    }
  },

  addProdutos: async (req, res) => {
    try {
      await ProdutosModel.create(req.body);
      return res.json(req.body);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  umProdutos: async (req, res) => {
    try {
      const produtos = await ProdutosModel.findOne(req.params.id);
      return res.json(produtos);
    } catch (error) {
      return res.json(error);
    }
  },

  removeProdutos: async (req, res) => {
    try {
      const ProdutoDeletado = await ProdutosModel.destroy(req.params.id);
      return res.json(ProdutoDeletado);
    } catch (error) {
      return res.json(error);
    }
  },
};

module.exports = ProdutosController;
