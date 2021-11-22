/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1,80m  seu IMC é xx
Luiz Otávio nasceu em 1980
*/

const nome = "Luiz Otávio"
const sobrenome = "Miranda"
const idade = 30
const peso = 84
const alturaEmMetros = 1.80
let imc //peso / (altura * altura)
let anoNascimento

imc = peso / alturaEmMetros ** 2

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetros}m e seu IMC é ${imc}`)

anoNascimento = 2019 - idade

console.log(nome, "nasceu em", anoNascimento)