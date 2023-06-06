// Propriedades e métodos do parâmetro req => http://expressjs.com/en/4x/api.html#req
// Propriedades e métodos do parâmetro res => http://expressjs.com/en/4x/api.html#res
const usuarioModel = require('../models/Usuario');

const UsuarioController = {
  listaUsuarios: async (req, res) => {
    try {
      const usuarios = await usuarioModel.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.json(error);
    }
  },

  addUsuario: async (req, res) => {
    try {
      const {id, nome, email, sobrenome, telefone , endereco, datanascimento, senha} = req.body;

      if(!id || !nome || !email || !sobrenome || !telefone || !endereco || !datanascimento || !senha){
                return res.send({mensagem:"Todos os campos são obrigatorios"});
      }
      const usuario =await usuarioModel.create(req.body);
   
      return res.json(usuario);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  umUsuario: async (req, res) => {
    try {
      const {id }=req.params;

      const usuario = await usuarioModel.findOne(req.params.id);
      
      if (!usuario.length){
         return res.status(400).json({mensage:"usuario não existe"})
      }
      return res.json(usuario);
    } catch (error) {
      return res.json(error);
    }
  },

  removeUsuario: async (req, res) => {
    try {
      const usuarioDeletado = await usuarioModel.destroy(req.params.id);
      return res.json(usuarioDeletado);
    } catch (error) {
      return res.json(error);
    }
  },
};

module.exports = UsuarioController;
