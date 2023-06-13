const express = require("express");
const router = express.Router();
const PedidoController = require("../controllers/PedidoController");

router.get("/", PedidoController.listar);
router.get("/:id", PedidoController.buscarUm);
router.post("/", PedidoController.adicionar);

module.exports = router;
