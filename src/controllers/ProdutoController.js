const ProdutosModel = require("../models/Produto");

const ProdutoController = {
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
      const {id,nome,valor,descricao} = req.body
      if(!id || !nome || !valor || !descricao){
        return res.send({ message : "Erro"})
      } else {
        console.log("Produto Adicionado");
      }
      const produto = await ProdutosModel.create(req.body);
      return res.json(produto);
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

module.exports = ProdutoController;
