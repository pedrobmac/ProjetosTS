//const data = new Date(0); //marco zero: 01/01/1970 00h00 - o parâmetro de tempo padrão é contato em milissegundos a partir desse marco

// const data = new Date(); //traz o atual

// const data = new Date(2021, 11 - 1, 23, 17, 05, 59, 999); //traz uma data fixa com a, m, d, h, M, s, ms (pelo menos a, m)

const data = new Date('2021-11-23 17:05:59.999'); //traz uma data fixa a partir de uma string padronizada

console.log(data); //gmt
console.log(data.toString()); //fuso local

console.log("Dia:", data.getDate());
console.log("Mês:", data.getMonth() + 1); //mês começa do zero
console.log("Ano:", data.getFullYear());
console.log("Hora:", data.getHours());
console.log("Minuto:", data.getMinutes());
console.log("Segundo:", data.getSeconds());
console.log("Milissegundo:", data.getMilliseconds());
console.log("Dia da Semana:", data.getDay()); // 0 - dom; 6 - sab

console.log(Date.now()); //traz timestamp em milissegundos a partir do marco zero