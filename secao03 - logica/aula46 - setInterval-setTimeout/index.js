function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}


function funcaoDoInteval() {
    console.log(mostraHora());
}

//passar: REFERÊNCIA da função (geralmente por anônima), intervalo
//setInterval(funcaoDoInteval, 1000);


// setInterval(function () {
//     console.log(mostraHora())
// }, 1000);

const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000);

setTimeout(function () {
    clearInterval(timer)
}, 5000);


setTimeout(function () {
    console.log("Olá, mundo!");
}, 2000);