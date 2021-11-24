function saudacao1() {
    console.log("Bom dia!");
}

function saudacao2(nome) {
    console.log("Bom dia, " + nome);
}

function saudacao3(nome) {
    return "Bom dia, " + nome;
}

saudacao1();

saudacao2("Fulano");
const valor = saudacao2("Cicrano");
console.log(valor); //undefined

console.log(saudacao3("Beltrano"));