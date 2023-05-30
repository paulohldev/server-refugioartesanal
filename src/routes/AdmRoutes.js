const express = require('express');
const router = express.Router();

router.post('/validacaoproduto', (req, res) => {
  res.json({ message: 'rota de tela de validação de produto' });
});
router.post('/listausuarios', (req, res) => {
  console.log(req.body);
  res.json({ message: 'rota de lista de usuarios ' });
});

router.post('/listavendedor', (req, res) => {
    console.log(req.body);
    res.json({ message: 'rota de lista de vendedores  ' });
  });

  router.post('/AddCategoria', (req, res) => {
    res.json({ message: 'rota de Adicionar Categoria ' });
  });

module.exports = router;