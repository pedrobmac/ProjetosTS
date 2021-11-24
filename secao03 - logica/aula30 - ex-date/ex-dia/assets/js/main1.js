const data = new Date();

let dataHoraFormatada;

dataHoraFormatada = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getNomeMes(data.getMonth())} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`

const h1 = document.querySelector(".container h1");
h1.innerHTML = dataHoraFormatada;

function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        default:
            return "";
    }
}

function getNomeMes(numeroMes) {
    switch (numeroMes) {
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro";
        default:
            return "";
    }
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}