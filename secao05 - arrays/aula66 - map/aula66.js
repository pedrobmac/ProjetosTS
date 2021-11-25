//Map - opera todos os valores de um array salvando num novo array, sem alterar o array original

//ATENÇÃO! Cuidado ao operar elementos que sejam variáveis de referência (array e objeto), pois altera o original. Criar um elemento novo na callback function

//EXEMPLO 1

//Dobrar o valor dos números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//forma longa
function callbackMap(valorIteracao, indiceIteracao, arrayCompleto) {
    //console.log(valorIteracao, indiceIteracao, arrayCompleto);
    const valorRetorno = valorIteracao * 2;
    return valorRetorno;
}
let numerosEmDobro = numeros.map(callbackMap); //mandar como argumento a função a ser executada, ou seja, sem ()
console.log(numerosEmDobro);

// forma curta
numerosEmDobro = numeros.map(numero => numero * 2);
console.log(numerosEmDobro);

console.log('Original:', numeros);



//EXEMPLO 2

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Maria', idade: 50 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 57 },
];

const pessoasNomeString = pessoas.map(obj => obj.nome);
console.log(pessoasNomeString);

// const pessoasSemNome = pessoas.map(obj => {
//     const novoObj = { ...obj }; //cria um novo objeto pra não afetar o original
//     delete novoObj.nome;
//     return novoObj;
// });
const pessoasSemNome = pessoas.map(obj => ({ idade: obj.idade })); //precisa envolver {} do objeto em () pro JS não achar que as chaves são o corpo da função
console.log(pessoasSemNome);

// const pessoasComId = pessoas.map((obj, i) => {
//     const novoObj = { ...obj }; //cria um novo objeto pra não afetar o original
//     novoObj.id = i;
//     return novoObj;
// });
const pessoasComId = pessoas.map((obj, i) => ({ id: i, ...obj })); //precisa envolver {} do objeto em () pro JS não achar que as chaves são o corpo da função
console.log(pessoasComId);

console.log('Original:', pessoas);