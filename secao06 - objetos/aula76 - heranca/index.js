//Aula de herança sem açúcar de sintaxe, mostrando como o JS faz

//Herança também é conhecido como delegação, nome mais coerente pro código abaixo, que faz tudo manualmente

//Produto -> aumento e desconto
//Camiseta -> cor / Caneca -> material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); //aproveita atributos da classe produto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //faz o prototype de Camiseta ser igual ao de Produto
Camiseta.prototype.constructor = Camiseta; //recupera o contexto do contrutor após ação de cima

Camiseta.prototype.aumento = function (percentual) { //sobreescreve o método aumenta apenas pra Camiseta, que deixa de usar o do prototype de Produto
    this.preco += this.preco * percentual / 100;
}

const camiseta1 = new Camiseta('Regata', 30, 'Preta');
console.log(camiseta1);

camiseta1.aumento(20);
console.log(camiseta1);


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Canecão', 19.50, 'Vidro', 5);

console.log(caneca1);
console.log(caneca1.estoque);