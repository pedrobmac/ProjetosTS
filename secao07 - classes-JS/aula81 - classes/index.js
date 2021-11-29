//Classes em JS são um "açúcar de sintaxe" para orientação a objetos 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    } //sem ;

    falar() {
        console.log(`${this.nome} está falando.`);
    } //sem ;

} //sem ;

const p1 = new Pessoa('André', 'Andrade');
console.log(p1);
p1.falar();
console.log(Object.getPrototypeOf(p1)); //os métodos não ficam na instâcia do objeto, e sim na classe (__proto__)