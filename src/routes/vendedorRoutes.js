const express = require('express');
const router = express.Router();

router.post('/telalogin', (req, res) => {
  res.json({ message: 'rota de tela login vendedor ' });
});
router.post('/cadastro', (req, res) => {
  console.log(req.body);
  res.json({ message: 'rota de tela de cadastro do vendedor' });
});

router.post('/artesaos', (req, res) => {
    res.json({ message: 'rota de tela de artesão ' });
  });
  router.post('/AddProduto', (req, res) => {
    res.json({ message: 'rota de Adicionar produto ' });
  });
  router.post('/AddCategoria', (req, res) => {
    res.json({ message: 'rota de Adicionar Categoria ' });
  });

module.exports = router;
