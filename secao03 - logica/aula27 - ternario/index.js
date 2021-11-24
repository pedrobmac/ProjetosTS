/*Operação ternária
(condição) ? "valor para verdadeiro" : "valor para falso"

*/

const pontuacao = 999;

if(pontuacao >= 1000){
    console.log("Mestre");
} else {
    console.log("Médio");
}

// código equivalente

console.log(pontuacao >= 1000 ? "Mestre" : "Médio");