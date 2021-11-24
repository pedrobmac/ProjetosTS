// for in lê os índices ou chaves do objeto
// retorna o índice ou chave (string, array, objeto)

const frutas = ["Pêra", "Maçã", "Uva", "Melancia"];

for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 20
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);

for (let chave in pessoa){
    console.log(pessoa[chave]);
}