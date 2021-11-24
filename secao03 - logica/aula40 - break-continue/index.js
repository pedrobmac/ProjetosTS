const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let numero of numeros) {

    if (numero === 2){ //pula a iteração do 2
        continue;
    }

    if (numero === 7){
        break; //sai do laço na hora
    }

    console.log(numero);
}