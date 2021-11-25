//Função construtora retorna um objeto
//Convenção: começar nome com letra maiúscula
//criar instância com new

function Pessoa(nome, sobrenome) {
    //Privados, sem o this
    const ID = 123456;
    const metodoInterno = () => {};

    //Públicos, quando coloca this
    this.nome = nome;
    this.sobrenome = this.sobrenome;

    this.metodo = function () {
        console.log("Método do " + this.nome);
    }
} //sem ;

const p1 = new Pessoa("João", "Silva");

console.log(p1.nome);
p1.metodo();