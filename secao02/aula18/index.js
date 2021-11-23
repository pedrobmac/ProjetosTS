//objeto literal
const pessoa1 = {
    nome: "Goku",
    sobrenome: "Kakaroto",
    idade: 30,

    fala(){ //não precisa escrever function
        console.log(`Oi! Eu sou o ${this.nome}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

console.log(pessoa1);
console.log(pessoa1.sobrenome);
pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);


//cria objeto no padrão antigo - factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, // equivale a nome: nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criaPessoa("Maria", "Oliveira", 37)
console.log(pessoa2);