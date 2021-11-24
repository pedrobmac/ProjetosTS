try {
console.log(naoExisto);
} catch(err){
    console.log("naoExisto não existe");
    //console.log(err); //evitar mostrar stack de erro pro usuário
}

function soma(x, y){
    if (typeof x !== "number" || typeof y !== "number"){
        //throw("x e y precisam ser números"); //só traz a string
        throw new TypeError("x e y precisam ser números"); //monta um objeto de erro
    }
    return x + y;
}

try{
console.log(soma(10,20));
console.log(soma(10,"20"));
} catch(err){
    //console.log(err);
    console.log("alguma mensagem mais amigável");
    console.log(err.message);
}