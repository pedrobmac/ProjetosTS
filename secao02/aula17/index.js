function soma1(x, y) {
    return x + y;
    console.log("nunca executo");
} //não precisa de ;

function soma2(x = 0, y = 0) { //valor padrão quando não recebe o parâmetro
    return x + y;
} //não precisa de ;

//função anônima
const raiz1 = function (n) {
    return n ** 0.5;
}; //precisa de ;

//arrow function
const raiz2 = (n) => {
    return n ** 0.5;
}; //precisa de ;

//arrow function simplificada (1 parâmetro, 1 comando no corpo)
const raiz3 = n => n ** 0.5;

console.log(soma1(2, 5));
console.log(soma1(2, " concatenou com a string"));
console.log(soma1(1)); //NaN
console.log(soma2(1));
console.log(raiz1(16));
console.log(raiz2(9));
console.log(raiz3(25));