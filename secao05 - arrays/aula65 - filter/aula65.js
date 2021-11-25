//Filter - filtra valores de um array para um novo array, sem alterar o array original

//EXEMPLO 1

//Retornar os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//forma longa
function callbackFilter(valorIteracao, indiceIteracao, arrayCompleto) {
    //console.log(valorIteracao, indiceIteracao, arrayCompleto);
    if (valorIteracao > 10) {
        return true;
    } else {
        return false;
    }
}
let numerosFiltrados = numeros.filter(callbackFilter); //mandar como argumento a função a ser executada, ou seja, sem ()
console.log(numerosFiltrados);

// forma curta
numerosFiltrados = numeros.filter(numero => numero > 10);
console.log(numerosFiltrados);



//EXEMPLO 2

//Retorne as pessoas que têm o nome com 6 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com "a"

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Maria', idade: 50 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 57 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
console.log(pessoasComNomeGrande);

const pessoasMais50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMais50);

// const pessoasAFimNome = pessoas.filter(obj => obj.nome[obj.nome.length - 1] === "a");
const pessoasAFimNome = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"));
console.log(pessoasAFimNome);