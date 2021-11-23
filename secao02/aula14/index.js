//JS segue o padrão IEEE 754-2008

const pi = 3.14159
let num1 = 100
let texto = "oi"
let nan = num1 * texto

console.log(pi.toFixed(2))
console.log(pi.toString() + num1)
console.log(Number.isInteger(num1))
console.log(Number.isInteger(pi))
console.log(Number.isNaN(texto))
console.log(Number.isNaN(nan))

let num2 = 0.7
let num3 = 0.1
num2 += num3 //0.8
num2 += num3 //0.9
num2 += num3 //1.0

console.log(num2) //impreciso
console.log((num2).toFixed(2)) //mascara imprecisão, mas continua quebrado
console.log(Number.isInteger(num2))

num2 = Number(num2.toFixed(2)) //precisa arredondar manualmente pra ser considerado número inteiro
console.log(Number.isInteger(num2))


//outra alternativa é não trabalhar com decimais, multiplicando os valores envolvidos e dividindo o resultado:
num2 = 0.7
num3 = 0.1

num2 = ((num2 * 100) + (num3 * 100)) / 100  //0.8
num2 = ((num2 * 100) + (num3 * 100)) / 100  //0.9
num2 = ((num2 * 100) + (num3 * 100)) / 100  //1.0

console.log(num2, Number.isInteger(num2))