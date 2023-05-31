const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

router.post('/', usuarioController.addUsuario); // Cria um registro
router.get('/', usuarioController.listaUsuarios); // Lista todos os registros
router.get('/:id', usuarioController.umUsuario); // Busca um registro através do ID
router.delete('/:id', usuarioController.removeUsuario); // Deleta um registro através do ID

module.exports = router;
