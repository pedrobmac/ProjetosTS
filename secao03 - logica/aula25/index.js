// "else if" encadeado sai do bloco quando satisfaz condição

const numero = 2;

if(numero >= 0 && numero <= 10){
    console.log("Número está entre 0 e 10");
} else if (numero % 2 === 0){
    console.log("Número é par");
} else {
    console.log("Número ímpar");
}

console.log("resto do código");

// bloco acima diferente de:

if(numero >= 0 && numero <= 10){
    console.log("Número está entre 0 e 10");
}

if (numero % 2 === 0){
    console.log("Número é par");
} else {
    console.log("Número ímpar");
}

console.log("resto do código");