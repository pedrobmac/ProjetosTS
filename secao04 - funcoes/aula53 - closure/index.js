//closure é o fechamento da definição do escopo aplicado à função

//closure é a habilidade que a função tem de acessar o seu escopo léxico

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao("Luiz"); //closure: Luiz
const funcao2 = retornaFuncao("João"); //closure: João
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());