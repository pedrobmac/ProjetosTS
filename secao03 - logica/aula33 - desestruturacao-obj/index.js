const pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 20,
    endereco: {
        rua: "Av Brasil",
        numero: 123
    }
};

//atribuição via desestruturação
const { nome: aluno, idade, filiacao = "José" } = pessoa;
console.log(aluno, idade, filiacao);

//operador rest/spread ...
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);