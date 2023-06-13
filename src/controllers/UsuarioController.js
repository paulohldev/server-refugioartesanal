// Propriedades e métodos do parâmetro req => http://expressjs.com/en/4x/api.html#req
// Propriedades e métodos do parâmetro res => http://expressjs.com/en/4x/api.html#res
const usuarioModel = require('../models/Usuario');

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
      const {id, nome, email, sobrenome, senha} = req.body;
     
      if(!id || !nome || !email || !sobrenome || !senha){
                return res.send({mensagem:"Todos os campos são obrigatorios"});
      }
      const usuario =await usuarioModel.create(req.body);
   
      return res.json(usuario);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  buscarUm: async (req, res) => {
    try {
      const {id }=req.params;

      const usuario = await usuarioModel.findByPk(id);
      
      if (!usuario.length){
         return res.status(400).json({mensage:"usuario não existe"})
      }
      return res.json(usuario);
    } catch (error) {
      return res.json(error);
    }
  },
  deletar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuarioExistente = await usuarioModel.findByPK(id);
      if (!usuarioExistente) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
      await usuarioModel.destroy(id);
      return res.json({ mensagem: "Usuário deletado com sucesso" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, sobrenome, telefone, endereco, datanascimento, senha } = req.body;
      const usuarioExistente = await usuarioModel.findByPk(id);
      if (!usuarioExistente) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
      // Atualiza os dados do usuario
      const usuarioAtualizado = await usuarioModel.update(id, {nome,email,sobrenome,telefone,endereco,datanascimento,senha});
      return res.json(usuarioAtualizado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

module.exports = UsuarioController;
