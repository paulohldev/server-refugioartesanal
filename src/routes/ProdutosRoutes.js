const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/ProdutoController");

router.post("/", produtoController.adicionar); // Cria um registro
router.get("/", produtoController.listar); // Lista todos os registros
router.get("/:id", produtoController.buscarUm); // Busca um registro através do ID
router.delete("/:id", produtoController.deletar); // Deleta um registro através do ID
router.put("/:id",produtoController.atualizar);// atualizar um registro atraves do id

module.exports = router;
