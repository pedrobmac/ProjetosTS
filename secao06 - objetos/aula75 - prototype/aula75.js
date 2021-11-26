const objA = {
    chaveA: 'A'
};

console.dir(objA);

console.log(objA.__proto__ === Object.prototype);

console.log(Object.getPrototypeOf(objA)); //forma segura de ver o protótipo do objeto passado


const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA); //configura o objA como __proto__ de objB
console.dir(objB);
console.log(objB.chaveA);

console.log(Object.getPrototypeOf(objB));


//Exemplo prático - colocando métodos no prototype e compartilhando-os

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentualDesconto) {
    this.preco -= this.preco * percentualDesconto / 100;
};

Produto.prototype.aumento = function (percentualDesconto) {
    this.preco += this.preco * percentualDesconto / 100;
};

const prod1 = new Produto('Caneca', 35.99);
prod1.desconto(10);
console.log(prod1.preco);
prod1.aumento(20);
console.log(prod1.preco);

const prod2 = {
    nome: 'Caneca',
    preco: 14.99
}

console.log(prod2); //console sem mostrar o construtor

Object.setPrototypeOf(prod2, Produto.prototype)

prod2.aumento(10);
console.log(prod2); //console agora mostra o construtor de Produto

console.log(Object.getPrototypeOf(prod2));


//Exemplo criando objeto junto com prototype
const p3 = Object.create(Produto.prototype, {
    nome: {
        enumerable: true,
        writable: true,
        value: 'Garrafa'
    },
    preco: {
        enumerable: true,
        writable: true,
        value: 110
    }
});
p3.aumento(20);
console.log(p3);