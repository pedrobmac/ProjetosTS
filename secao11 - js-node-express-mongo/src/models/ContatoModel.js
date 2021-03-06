const mongoose = require('mongoose');
const validator = require('validator');
const {
  ids
} = require('webpack');

const ContatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: false,
    default: ''
  },
  telefone: {
    type: String,
    required: false,
    default: ''
  },
  email: {
    type: String,
    required: false,
    default: ''
  },
  criadoEm: {
    type: Date,
    default: Date.now
  },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
  }

  async edit(id) {
    if (typeof id !== 'string') return;

    this.valida(); //validação dos dados puros do formulário
    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {
      new: true
    });

  }

  async register() {
    this.valida(); //validação dos dados puros do formulário
    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
  }

  valida() {
    //Recebe apenas strings
    this.cleanUp();

    //O e-mail precisa ser válido
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if (!this.body.email && !this.body.telefone) this.errors.push('Cadastre pelo menos um e-mail ou telefone');
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      telefone: this.body.telefone,
      email: this.body.email
    }
  }

  //Métodos estáticos
  static async buscaPorId(id) {
    if (typeof id !== 'string') return;
    return await ContatoModel.findById(id);
  }

  static async buscaContatos() {
    return await ContatoModel.find()
    .sort({
      criadoEm: -1
    });
  }

  static async delete(id) {
    if (typeof id !== 'string') return;
    return await ContatoModel.findByIdAndDelete(id);
  }

}

module.exports = Contato;