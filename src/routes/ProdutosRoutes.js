const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.post('/', ProdutoController.addProdutos); // Cria um registro
router.get('/', ProdutoController.listaProdutos); // Lista todos os registros
router.get('/:id', ProdutoController.umProdutos); // Busca um registro através do ID
router.delete('/:id', ProdutoController.removeProdutos); // Deleta um registro através do ID

module.exports = router;
