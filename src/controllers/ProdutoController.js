const ProdutosModel = require('../models/Produto');
const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');
const multer = require('multer');
const multerConfig = require('../config/multerConfig');

const upload = multer(multerConfig).single('foto');

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

  listarPorArtesao: async (req, res) => {
    try {
      const { id } = req.params;
      const produtos = await ProdutosModel.findAll({
        where: { usuarioId: id },
      });

      return res.json(produtos);
    } catch (error) {
      return res.json(error);
    }
  },

  adicionar: async (req, res) => {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { nome, valor, descricao, categoria_id } = req.body;
        const { usuarioId } = req;

        console.log('usuario: ', req.usuarioId);

        const missingFields = [];

        if (!nome) {
          missingFields.push('nome');
        }

        if (!valor) {
          missingFields.push('valor');
        }

        if (!descricao) {
          missingFields.push('descricao');
        }

        if (!categoria_id) {
          missingFields.push('categoria_id');
        }

        if (!usuarioId) {
          missingFields.push('usuarioId');
        }

        if (!originalname) {
          missingFields.push('originalname');
        }

        if (!filename) {
          missingFields.push('filename');
        }

        if (missingFields.length > 0) {
          return res.status(400).json({
            message: 'Campos obrigatórios não preenchidos',
            missingFields: missingFields,
          });
        }

        const produto = await ProdutosModel.create({
          nome,
          valor,
          descricao,
          usuarioId,
          originalname,
          filename,
          categoria_id,
        });

        return res.status(200).json(produto);
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ message: 'Desculpe, ocorreu um erro.', error });
      }
    });
  },
  buscarUm: async (req, res) => {
    try {
      const { id } = req.params;

      const produto = await Produto.findByPk(id);
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
      const { id } = req.params;
      const produto = await ProdutosModel.findByPk(id);
      if (!produto) {
        return res.status(400).json({ message: 'Produto não existe' });
      }
      await produto.destroy();

      return res.status(200).json({ message: 'Produto Deletado' });
    } catch (error) {
      return res.status(200).json({ message: 'Desculpe, ocorreu um erro.' });
    }
  },
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, valor, descricao } = req.body;

      const produto = await ProdutosModel.findByPk(id);

      if (!produto) {
        return res.status(400).json({ message: 'Produto não existe' });
      }

      const produtoAtualizado = await produto.update(req.body);

      return res.status(200).json(produtoAtualizado);
    } catch (error) {
      return res.status(400).json({ message: 'Desculpe, oorreu um erro.' });
    }
  },
};

module.exports = ProdutoController;
