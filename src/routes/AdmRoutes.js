const express = require('express');
const router = express.Router();
const usuarios= require("./usuario.json")
router.get('/validacaoproduto', (req, res) => {
  res.json({ usuarios: usuarios });
});
router.get('/listausuarios', (req, res) => {
  console.log(req.body);
  res.json({ message: 'rota de lista de usuarios ' });
});
  router.post('/AddCategoria', (req, res) => {
    res.json({ message: 'rota de Adicionar Categoria ' });
  });

module.exports = router;