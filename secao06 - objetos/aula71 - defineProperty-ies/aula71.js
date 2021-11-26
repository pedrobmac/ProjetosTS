//defineProperty - item a item
//defineProperties - vários itens junto

function Produto(nome, preco, estoque, tamanho, tipoCorte, lancamento) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque; declarando aqui, seria public

    //define as propriedades de uma chave. Parâmetros: obj, chave, { parâmetros }
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //permitir exibir a chave
        value: estoque, //link do parâmetro com o atributo (ou método)
        writable: false, //permitir sobreescrever conteúdo
        configurable: false //permitir editar a chave
    });
    
    //define as propriedades de várias chaves. Parâmetros: obj, { chave { parâmetros },  chave { parâmetros }, ... }
    Object.defineProperties(this, {
        tamanho: {
            enumerable: true, //permitir exibir a chave
            value: tamanho, //link do parâmetro com o atributo (ou método)
            writable: false, //permitir sobreescrever conteúdo
            configurable: false //permitir editar a chave
        },
        tipoCorte: {
            enumerable: true, //permitir exibir a chave
            value: tipoCorte, //link do parâmetro com o atributo (ou método)
            writable: false, //permitir sobreescrever conteúdo
            configurable: false //permitir editar a chave
        },
        lancamento: {
            enumerable: true, //permitir exibir a chave
            value: lancamento, //link do parâmetro com o atributo (ou método)
            writable: false, //permitir sobreescrever conteúdo
            configurable: false //permitir editar a chave
        }
    });
}

const p1 = new Produto('Camiseta', 19.99, 3, 'M', 'gola-V', true);
p1.estoque = 500; //executa ou ignora dependendo de writable
delete p1.estoque; //executa ou ignora dependendo de configurable
console.log(p1);
console.log(Object.keys(p1)); //exibe estoque dependendo de enumerable