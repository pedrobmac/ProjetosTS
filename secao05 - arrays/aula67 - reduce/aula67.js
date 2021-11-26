//Reduce - função usada para operar um array, sem alterar o mesmo e retornar apenas um valor
//reduz um array a um único elemento
//dependendo do uso, reage da mesma forma que o filter e map (mas não é o ideal)
//o valor inicial do acumulador deve refletir o que se deseja obter (0 - número, "" - string, [] - array etc) e o valor iterado será o primeiro elemento do array. Se não mandar o parâmetro, ele será o primeiro elemento do array automaticamente ( e o valor iterado o segundo elemento).

//ATENÇÃO! Cuidado ao operar elementos que sejam variáveis de referência (array e objeto), pois altera o original. Criar um elemento novo na callback function

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//somar todos os valores do array
//retornar um array com os valores ímpares

//forma longa
function callbackReduce(acumulador, valorIteracao, indiceIteracao, arrayCompleto) {
    //console.log(acumulador, valorIteracao, indiceIteracao, arrayCompleto);
    acumulador += valorIteracao;
    return acumulador;
}
let total = numeros.reduce(callbackReduce, 0); //mandar como argumento a função a ser executada, ou seja, sem (); 0 é o valor inicial do acumulador
console.log(total);

// forma curta
total = numeros.reduce((ac, num) => ac += num);
console.log(total);



//Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Maria', idade: 63 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 57 },
];

const maisVelho = pessoas.reduce((acu, pes) => (acu.idade >= pes.idade)? acu : pes);
console.log(maisVelho);