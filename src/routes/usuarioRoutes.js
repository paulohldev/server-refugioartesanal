const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  res.json({ message: 'Rota de login ' });
});
router.post('/signup', (req, res) => {
  res.json({ message: 'rota de tela de cadastro' });
});

router.post('/forgot-password', (req, res) => {
    res.json({ message: 'rota de esqueceu a senha' });
  });

  router.post('/reset-password ', (req, res) => {
    res.json({ message: 'rota redifinir senha ' });
  });


  
module.exports = router;
