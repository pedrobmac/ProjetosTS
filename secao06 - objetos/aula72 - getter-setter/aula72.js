//defineProperty - Getters e Setters

//Em: constructor function

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque; declarando com this, seria public

    let estoquePrivado = estoque; //declarado sem this, é private
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number'){
                console.log('Valor do estoque é inválido');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 19.99, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 'tipo inválido';
p1.estoque = 4;
console.log(p1.estoque);


//Em Factory function:

function criaProduto(nome, preco, estoque) {
    return {
        nome,
        preco,
        get estoque(){
            return estoque;
        },
        set estoque(valor){
            if (typeof valor !== 'number'){
                console.log('Valor do estoque é inválido');
                return;
            }
            estoque = valor;
        }
    };
}

const p2 = criaProduto('Outra Camiseta', 29.99, 6);
console.log(p2);
console.log(p2.estoque);
p2.estoque = 'tipo inválido';
p2.estoque = 5;
console.log(p2.estoque);