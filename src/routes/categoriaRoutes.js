const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

router.get('/', categoriaController.listar);
router.get('/:id', categoriaController.buscarUm);
router.put('/:id', categoriaController.atualizar);
router.delete('/:id', categoriaController.deletar);
router.post('/', categoriaController.adicionar);

module.exports = router;
