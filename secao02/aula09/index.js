//dados primitivos: string, number, undefined, null, boolean, symbol
const nome1 = 'Luiz'; // string
const nome2 = "Luiz"; // string
const nome3 = `Luiz`; // string
const num1 = 10; // number
const num2 = 3.14; // number
let variavel1; // undefined - não inicializado (não definido)
const variavel2 = null // null - definido como null (!= undefined)
const verdadeiro = true; // boolean

console.log(typeof verdadeiro, verdadeiro)


//dado primitivo copia o valor de uma variável pra outra
//dado estruturado copia a referência
let vetor1 = [1, 2]
const vetor2 = vetor1
vetor1.push(3)
console.log(vetor2)