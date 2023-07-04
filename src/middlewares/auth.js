const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

module.exports = async function auth(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ mensagem: 'Você precisa estar logado.' });
  }
  const [, token] = auth.split(' ');

  try {
    const dados = jwt.verify(token, 'chave');

    const { id, email } = dados;

    const usuario = Usuario.findOne({ where: { id, email } });

    if (!usuario) {
      return res.status(401).json({ mensagem: 'Usuário inválido' });
    }

    req.usuarioId = id;
    req.usuarioEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json('Token inválido');
  }
};
