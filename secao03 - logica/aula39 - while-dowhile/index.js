//útil pra quando não se sabe exatamente quando terminar o laço
//while checa condição primeiro e enquanto for true, executa
//do while executa uma vez e checa condicao


let i = 0;

while (i <= 5) {
    console.log(i);
    i++;
} //sem ;


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

let rand = aleatorio(1, 20);

while (rand !== 10){
    rand = aleatorio(1, 20);
    console.log(rand);
}

do {
    rand = aleatorio(1, 20);
    console.log(rand);
} while (rand !== 5); //com ;