//declaração tradicional de função (faz hoisting)
falaOi();

function falaOi() {
    console.log("Oi!");
} //sem ;

// funções são first-class objects, ou seja, podem ser tratadas como dados. por isso permite jogar funções em variáveis

//pode ou não ter um nome, como nomeDaFuncao abaixo
const souUmDado = function nomeDaFuncao() {
    console.log("Sou um dado");
}; //com ;
souUmDado();

function executaFuncao(funcao) {
    console.log("Executando função recebida por parâmetro");
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}

funcaoArrow();

//Dentro de um objeto
const obj = {
    //forma antiga de declaracao
    falar1: function () {
        console.log("Estou falando");
    },

    //forma nova de declaracao
    falar2(){
        console.log("Também estou falando");
    }
};

obj.falar1();
obj.falar2();
