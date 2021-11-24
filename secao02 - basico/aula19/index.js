/* 
Tipos primitivos (imutáveis) - string, number, boolean, undefined, null, bigint, symbol - copia os valores

Referência (mutáveis) - array, object, function - copia as referências


*/

let nome = "Luiz";
nome[0] = "R";
console.log(nome[0], nome); //resultado: é imutável, não alterou

let a = "A";
let b = a; //copia o valor do tipo primitivo
console.log(a, b);
a = "outra coisa";
console.log(a, b); //muda só o a


let x = [1, 2, 3];
let y = x; //copia a referência
console.log(x, y);
x.push(4)
console.log(x, y); //mudam os dois
y.pop()
console.log(x, y); //mudam os dois


y = [...x]; //spread do array x, que copia os elementos, que são primitivos, pra y
y.push(4);
x.pop()
console.log(x, y);


const p = {
    nome: "João",
    sobrenome: "Silva"
};

const q = p; //copia referência
const r = { ...p } //spread e copia valores

p.nome = "Rafael";
console.log(q); //muda
console.log(r); //não muda