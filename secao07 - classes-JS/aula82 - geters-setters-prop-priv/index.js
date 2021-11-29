const _velocidade = Symbol('velocidade'); //o parâmetro de descrição em Symbol não é obrigatório
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; //propriedade privada
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor <= 0 || valor >= 100) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;

        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;

        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1);

c1.velocidade = 95; //chama o set sem ()
console.log(c1.velocidade); //chama o get sem ()



//Mais um exemplo
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Marcelo', 'Cruz');
p1.nomeCompleto = 'Rafael Novaes Leite';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);