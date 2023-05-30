const express = require('express');
const router = express.Router();

router.post('/products', (req, res) => {
  res.json({ message: 'rota de tela de produtos' });
});
router.post('/shop-single', (req, res) => {
  res.json({ message: 'rota de tela produto unico' });
});




  
module.exports = router;
