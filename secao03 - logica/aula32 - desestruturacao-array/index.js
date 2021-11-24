let a = "A";
let b = "B";
let c = "C";
let d = "D";
let e = "E";

//atribuição por desestruturação direta
[a, b, c, d, e] = [1, 2, 3, 4, 5];
console.log(a, b, c, d, e);

//atribuição por desestruturação com auxiliar
const numeros = [4, 5, 6, 7, 8];
[a, b, c, d, e] = numeros;
console.log(a, b, c, d, e);

//operador rest/spread ...
// separando por vírgula sem botar variável, pula o índice
const [primeiroNumero, , terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, terceiroNumero, resto);