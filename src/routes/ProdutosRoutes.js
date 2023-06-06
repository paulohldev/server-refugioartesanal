const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController');

router.post('/', produtoController.addProdutos); // Cria um registro
router.get('/', produtoController.listaProdutos); // Lista todos os registros
router.get('/:id', produtoController.umProdutos); // Busca um registro através do ID
router.delete('/:id', produtoController.removeProdutos); // Deleta um registro através do ID

module.exports = router;
