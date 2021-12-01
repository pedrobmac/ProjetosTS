function aleatorio(min = 0, max = 3) {
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
            return;
        }, tempo)
    });
}

//execução síncrona sem async/await
// esperaAi('Fase 1', aleatorio())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase:', fase);
//     })
//     .catch(e => console.log(e));


//execução síncrona com async/await
async function executa() { //async avisa que existem operações assíncronas
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio()); //await faz o script esperar a promise se resolver, simulando que é síncrona
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();