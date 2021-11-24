//Escreva uma função que recebe 2 números e retorna o maior deles

function maior(x, y){
    return Math.max(x, y);
}

const maior2 = (x, y) => x > y ? x : y;

console.log(maior(10,20));
console.log(maior(100,20));
console.log(maior(10,10));

console.log(maior2(10,20));
console.log(maior2(100,20));
console.log(maior2(10,10));