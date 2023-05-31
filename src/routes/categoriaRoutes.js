const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriaController');

router.get('/', categoriaController.listaCategorias);
router.get('/:id', categoriaController.umaCategoria);
router.post('/', categoriaController.addCategoria);

module.exports = router;
