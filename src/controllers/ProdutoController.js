const ProdutosModel = require('../models/Produto');
const Categoria = require('../models/Categoria');

const ProdutoController = {
  listar: async (req, res) => {
    try {
      const produtos = await ProdutosModel.findAll({
        include: [
          {
            model: Categoria,
            as: 'categoria',
            attributes: ['nome'],
          },
        ],
      });

      return res.json(produtos);
    } catch (error) {
      return res.json(error);
    }
  },

  adicionar: async (req, res) => {
    try {
      const { id, nome, valor, descricao } = req.body;
      if (!id || !nome || !valor || !descricao) {
        return res.status(400).send({ message: 'O campo não pode ser vazio' });
  
      }
      const produto = await ProdutosModel.create(req.body);
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(400).json({message:'Desculpe, ocorreu um erro.'},error);
    }
  },

  buscarUm: async (req, res) => {
    try {
      const{id}=req.params;

      const produto= await categoriaModel.findByPk(id);
      if (!produto) {
        return res.status(400).json({ message: 'O produto não existe.' });
      }

      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },

  deletar: async (req, res) => {
    try {
      const{id}=req.params;
      const produto= await ProdutosModel.findByPk(id);
      if(!produto){
        return res.status(400).json({message:"Produto não existe"});
      }
      await produto.destroy();
      
      return res.status(200).json({message:"Produto Deletado"});
    } catch (error) {
      return res.status(200).json({message:"Desculpe, ocorreu um erro."});
    }
  },
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, valor, descricao } = req.body;
      
      const produto = await ProdutosModel.findByPk(id);
      
      if(!produto){
        return res.status(400).json({message:"Produto não existe"});
      }

      const produtoAtualizado=await produto.update(req.body);
      
      return res.status(200).json(produtoAtualizado);
    } catch (error) {
      return res.status(400).json({message:"Desculpe, oorreu um erro."});
    }
  },

};

module.exports = ProdutoController;
