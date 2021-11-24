const data = new Date();

let dataHoraFormatada;

dataHoraFormatada = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getNomeMes(data.getMonth())} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`

const h1 = document.querySelector(".container h1");
h1.innerHTML = dataHoraFormatada;

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ]
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    const nomesMes = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    return nomesMes[numeroMes];
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}