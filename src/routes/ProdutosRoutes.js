const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');

router.post('/', ProdutosController.addProdutos); // Cria um registro
router.get('/', ProdutosController.listaProdutos); // Lista todos os registros
router.get('/:id', ProdutosController.umProdutos); // Busca um registro através do ID
router.delete('/:id', ProdutosController.removeProdutos); // Deleta um registro através do ID

module.exports = router;
