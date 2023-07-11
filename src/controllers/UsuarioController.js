// Propriedades e métodos do parâmetro req => http://expressjs.com/en/4x/api.html#req
// Propriedades e métodos do parâmetro res => http://expressjs.com/en/4x/api.html#res
const usuarioModel = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const UsuarioController = {
  listar: async (req, res) => {
    try {
      const usuarios = await usuarioModel.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.json(error);
    }
  },

  adicionar: async (req, res) => {
    try {
      const { nome, email, sobrenome, senha, telefone, isArtesao } = req.body;
      console.log(req.body);
      if (!nome || !email || !sobrenome || !senha || !telefone) {
        return res
          .status(400)
          .json({ mensagem: 'Todos os campos são obrigatórios' });
      }

      const usuario = await usuarioModel.create({
        nome,
        email,
        sobrenome,
        senha,
        telefone,
        isArtesao: isArtesao || false,
      });

      return res.status(201).json({
        mensagem: 'Usuário adicionado com sucesso',
        usuario,
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  // buscarUm: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     const usuario = await usuarioModel.findByPk(id);

  //     if (!usuario) {
  //       return res.status(400).json({ mensage: 'usuario não existe' });
  //     }
  //     return res.json(usuario);
  //   } catch (error) {
  //     return res.json(error);
  //   }
  // },

  deletar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuarioExistente = await usuarioModel.findByPk(id);
      if (!usuarioExistente) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      await usuarioExistente.destroy(id);
      return res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      // const { nome, email, sobrenome, telefone, endereco, datanascimento, senha } = req.body;
      const usuarioExistente = await usuarioModel.findByPk(id);
      if (!usuarioExistente) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      // Atualiza os dados do usuario
      const usuarioAtualizado = await usuarioExistente.update(req.body);
      return res.json(usuarioAtualizado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  listarArtesao: async (req, res) => {
    try {
      const artesaos = await usuarioModel.findAll({
        where: { isArtesao: true },
      });
      return res.status(200).json(artesaos);
    } catch (error) {
      return res.json(error);
    }
  },

  buscarArtesao: async (req, res) => {
    try {
      const usuario = await usuarioModel.findByPk(req.params.id, {
        attributes: ['nome', 'sobrenome', 'isArtesao', 'id'],
      });

      if (usuario.isArtesao !== true) {
        return res
          .status(400)
          .json({ mensagem: 'Este usuário não é um artesão.' });
      }

      return res.json(usuario);
    } catch (error) {
      return res.json(error);
    }
  },

  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      // Verificar as credenciais do usuário
      const usuario = await usuarioModel.findOne({ where: { email, senha } });

      if (usuario) {
        // Criar um token JWT com uma chave secret
        const chaveSecreta = 'chave';
        const token = jwt.sign(
          { id: usuario.id, email: usuario.email },
          chaveSecreta,
          { expiresIn: '1h' },
        );

        return res.json({ token: token });
        // Envia o token como resposta
      }
      // Caso as credenciais estejam incorretas, retornar null
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  },
};
module.exports = UsuarioController;
