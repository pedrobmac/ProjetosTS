//objeto Math

let num1 = 9.54578;

let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);

console.log(num2, num3, num4);

console.log(Math.max(1, 2, 3, 600, 1000, -10));
console.log(Math.min(1, 2, 3, 600, 1000, -10));

//número aleatório entre 7 e 15
let aleatorio = Math.random() * (15 - 7) + 7;
aleatorio = Math.round(aleatorio)
console.log(aleatorio);

console.log(Math.PI)
console.log(Math.pow(2, 10))

console.log(100 / 0)

if(100 / 0){
    console.log("verdadeiro")
}