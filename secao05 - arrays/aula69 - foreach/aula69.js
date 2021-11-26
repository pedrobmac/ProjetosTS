const a1 = [10, 20, 30, 40, 50];

//for of, pra comparação
for (let valor of a1) {
    console.log(valor);
}

//forEach

//Longo

function callbackForEach(valorIteracao, indiceIteracao, array){
    // console.log(valorIteracao, indiceIteracao, array);
    console.log(valorIteracao);
}
a1.forEach(callbackForEach);


//Curto

a1.forEach(val => console.log(val))