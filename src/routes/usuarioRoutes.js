const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/UsuarioController");

router.post("/", usuarioController.adicionar); // Cria um registro
router.get("/", usuarioController.listar); // Lista todos os registros
router.get("/:id", usuarioController.buscarUm); // Busca um registro através do ID
router.delete("/:id", usuarioController.deletar); // Deleta um registro através do ID
router.put("/:id", usuarioController.atualizar); // Atualiza um registro através do ID

module.exports = router;
