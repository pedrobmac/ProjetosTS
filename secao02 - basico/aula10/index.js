/*
Operadores aritméticos:

+ adição / concatenação
- subtração
* multiplicação
/ divisão
** potenciação
% resto da divisão

Precedência:
()      parênteses
**      potenciação
* / %   multiplicação/divisão/resto
+ -     soma/subtração

Incremento: ++
Decremento: --

*/

const num1 = 5
const num2 = 2
const num3 = 10
console.log((num1 + num2) * num3)

let contador = 0

console.log(contador++)
console.log(contador)
console.log(++contador)

contador += 5
contador /= 10
console.log(contador)

//converte string pra número via:
// parseInt - retorna número inteiro
// parseFloat - retorna número decimal
// Number() - retorna inteiro ou decimal, dependendo do que tiver

console.log(parseFloat("5.0"))