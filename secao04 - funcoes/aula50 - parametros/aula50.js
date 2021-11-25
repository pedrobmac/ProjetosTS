//na declaracao tradicional e anônima sem ser arrow, a função guarda os argumentos em arguments, independentemente da declaração de parâmetros na função
function funcao1() {
    console.log(arguments);
}
funcao1("argumento enviado sem parâmetro declarado");


//parâmetros sem argumento ficam como undefined
function funcao2(a, b, c, d) {
    console.log(a, b, c, d);
}

funcao2(1, 2);

//pode ser usado valor padrão do parâmetro não enviado nos argumentos de chamada
function funcao3(a, b = 1, c = 5) {
    console.log(a + b + c);
}

//única forma de pular o envio de um parâmetro, esperando que ele assuma o valor padrão, mas não é uma boa prática usar essa lógica
funcao3(2, undefined, 2);


//desestruturação no recebimento de parâmetros {} pra obj, [] pra array
function funcao4({
    nome,
    sobrenome,
    idade
}) {
    console.log(nome, sobrenome, idade);

}

pessoa = {
    nome: "João",
    sobrenome: "Marinho",
    idade: 55
};

funcao4(pessoa);

//pode usar rest pra receber vários argumentos num parâmetro, desde o rest seja o último parâmetro
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}

conta("*", 10, 2, 3, 4);


//arrow function não tem arguments, mas pode simular comportamento recebendo parâmetros com rest
const funcao5 = (...args) => console.log(args);

funcao5("teste", { objeto: true}, false, 5);