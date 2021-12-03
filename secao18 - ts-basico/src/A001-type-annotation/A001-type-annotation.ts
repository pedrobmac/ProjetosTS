/* eslint-disable */

// Tipos básicos

let nome: string = "Pedro"; //Qualquer tipo de string '' e ""
let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n; //big int

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayDeString: Array<string> = ['ah', 'be', 'ce'];
let arrayDeString2: string[] = ['ah', 'be', 'ce'];


//Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Pedro',
  idade: 30
};

console.log(pessoa.nome);


//Funções
function soma1(x: number, y: number){
  return x + y;
}

const result1 = soma1(3,2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;

const result2 = soma2(3,2);

console.log(result1, result2);
