function teste(valor) {
    console.log(valor + ' passou por aqui.');
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste('Um teste'); //executa toda vez que for instanciada
    }

    //Método de instâcia
    aumentarVolume(){
        this.volume += 2;
        console.log(this); //this aponta pra instância
    }
    
    //Método de instâcia
    diminuirVolume(){
        this.volume -= 2;
    }

    //Método da classe (estático)
    static trocarPilha(){ //exemplo ruim da aula...
        console.log('Pilha trocada');
        console.log(this.volume); //undefined, pois não é relacionado à uma instância
        console.log(this); //this aponta pra classe, não pra instância
    }

}

const c1 = new ControleRemoto('Suny');
const c2 = new ControleRemoto('RG');
c1.aumentarVolume();
c1.aumentarVolume();
c2.aumentarVolume();
console.log(c1, c2);

// c1.trocarPilha(); //acessar o método static pela instância não funciona
ControleRemoto.trocarPilha(); //acessa pela classe, não tem acesso aos valores das instâncias


Math.random(); //exemplo de método estático. É chamado pela própria classe, não dá new em uma instância