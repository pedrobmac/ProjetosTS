import _ from './modulo';

const array = [100, 200, 300, 400];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array)); //função incluída num pacote externo
console.log(_.naoExisto); //ao declarar no declaration file, o TS considera que existe, mesmo se não estiver implementado
