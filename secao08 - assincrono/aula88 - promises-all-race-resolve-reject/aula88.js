function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Erro!'); //reject dá resposta nok e só pode ter um argumento
                return;
            }

            resolve(msg.toUpperCase() + ' passou'); //resolve dá resposta ok e só pode ter um argumento
        }, tempo)
    });
}

//Promise.all - recebe um array e executa na ordem dele, traz o resultado em array.
const promisesOk = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

const promisesNok = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    esperaAi(123, 1000), //força erro na função acima
    'Outro valor'
];

Promise.all(promisesOk) //retorna array com resolves
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

Promise.all(promisesNok) //retorna erro
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

//Promise.race - recebe um array e executa todos em paralelo, traz apenas o primeiro a se cumprir (mas não cancela a execução das outras, o código só pára quando cumprir todas)
Promise.race(promisesOk) //retorna o primeiro valor a ser resolvido, seja uma promisse ou não
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });


//Promise.resolve - já devolve como ok
function baixaPagina() {
    const emCache = true; //simula se está ou não em cache

    if (emCache) {
        return Promise.resolve('Página em cache'); //retorna promessa resolvida sem ter chamado a função que usa promise
    } else {
        return esperaAi('Baixei a página', 3000); //chama a função que usa promise
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e));


//Promise.reject - já devolve como nok
function sessaoValida() {
    const sessaoExpirou = true; //simula se está ou não expirada

    if (sessaoExpirou) {
        return Promise.reject('Sessão expirada'); //retorna promessa rejeitada sem ter chamado a função que usa promise
    } else {
        return esperaAi('Sessão ok, baixei a página', 2000); //chama a função que usa promise
    }
}

sessaoValida()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e));