const express = require('express');
const router = express.Router();
const  PedidoController = require('../controllers/PedidoController');

router.get('/', PedidoController.listapedidos);
router.get('/:id', PedidoController.umapedidos);
router.post('/', PedidoController.addpedidos);

module.exports = router;
