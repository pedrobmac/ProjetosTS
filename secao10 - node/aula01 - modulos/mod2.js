class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// exports.Pessoa = Pessoa; //exporta classe

const nome = "Andreia";
const sobrenome = "Alves";

module.exports = { //assim não funciona com exports direto, só module.exports
    nome, sobrenome, Pessoa
}