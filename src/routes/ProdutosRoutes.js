const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController');
const isArtesao = require('../middlewares/isArtesao');

router.post('/', isArtesao, produtoController.adicionar); // Cria um registro
router.get('/', produtoController.listar); // Lista todos os registros
router.get('/:id', produtoController.buscarUm); // Busca um registro através do ID
router.get('/artesao/:id', produtoController.listarPorArtesao); // Busca um registro através do ID
router.delete('/:id', isArtesao, produtoController.deletar); // Deleta um registro através do ID
router.put('/:id', isArtesao, produtoController.atualizar); // atualizar um registro atraves do id

module.exports = router;
