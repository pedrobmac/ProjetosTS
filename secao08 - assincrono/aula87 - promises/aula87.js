/*
Promises tê 3 estados:
Pending - está sendo executada e ainda não retornou um valor
Fulfilled - executou e passou (resolve)
Rejected - executou e nõ passou (reject)
*/

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Aceita apenas string'); //reject dá resposta nok e só pode ter um argumento
        setTimeout(() => {
            resolve(msg); //resolve dá resposta ok e só pode ter um argumento
        }, tempo)
    });
}

//apenas uma promisse
esperaAi('Frase 1 sozinha', aleatorio(1, 4))
    .then(resposta1 => { //tratamento quando retorna ok
        console.log(resposta1);
    })
    .catch(); //tratamento quando retorna nok


//promisses encadeadas
esperaAi('Frase 1 encadeada', aleatorio(1, 4))
    .then(resposta1 => {
        console.log(resposta1);
        return esperaAi('Frase 2 encadeada', aleatorio(1, 4));
    })
    .then(resposta2 => {
        console.log(resposta2);
        return esperaAi('Frase 3 encadeada', aleatorio(1, 4));
    })
    .then(resposta3 => {
        console.log(resposta3);
        return esperaAi('Frase 3 encadeada', aleatorio(1, 4));
    })
    .then(() => { //não é obrigado a usar o parâmetro de retorno
        console.log('Sou o último a ser exibido nessa cadeia');
    })
    .catch();

console.log('Primeiro log exibido, pois promisses rodam em paralelo');


//promisses encadeadas com erro
esperaAi('Conexão com BD', aleatorio(1, 4))
    .then(res => {
        console.log(res);
        return esperaAi('Buscando dados', aleatorio(1, 4));
    })
    .then(res => {
        console.log(res);
        return esperaAi(1234, aleatorio(1, 4));
    })
    .then(() => {
        console.log('Nunca executo');
    })
    .catch(e => { //trata erro via catch
        console.log('Erro:', e);
    });