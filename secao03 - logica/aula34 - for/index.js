/*
for (contador; condição de repetição; incremento/decremento) {corpo} sem ponto e vírgula depois do }
usa-se geralmente pra iteráveis (array ou string)
*/

for (let i = 0; i <= 5; i++) {
    console.log(i);
}


for (let i = 10; i >= 3; i -= 2) {
    console.log(i);
}


const frutas = ["Maçã", "Pêra", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}