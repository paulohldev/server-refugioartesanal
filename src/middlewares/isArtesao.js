const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

module.exports = async function auth(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res
      .status(401)
      .json({ mensagem: 'Você não tem permissão para acessar.' });
  }
  const [, token] = auth.split(' ');

  try {
    const dados = jwt.verify(token, 'chave');

    const { id, email, nome } = dados;

    const usuario = await Usuario.findOne({ where: { id, email } });

    if (!usuario) {
      return res.status(401).json({ mensagem: 'Usuário inválido' });
    }

    if (!usuario.isArtesao) {
      return res
        .status(401)
        .json({ mensagem: 'Você só pode criar um produto, sendo um artesão.' });
    }

    req.usuarioId = id;
    req.usuarioEmail = email;
    req.usuarioNome = nome;

    return next();
  } catch (e) {
    return res.status(401).json('Token inválido');
  }
};
