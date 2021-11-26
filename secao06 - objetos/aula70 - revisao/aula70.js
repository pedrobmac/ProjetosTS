//Criar objeto um a um - Objeto literal; via contrutor da classe Object

//Criar molde para instanciar - factory function; constructor function

//Criar via class (açúcar de sintaxe no JS)

//Objeto literal
const pessoa1 = {
    nome: 'João',
    sobrenome: 'Marques'
};

console.log(pessoa1);

console.log(pessoa1.nome);

chave = 'sobrenome';
console.log(pessoa1[chave]);

//-------------------------------------

//Construtor da classe Object
const pessoa2 = new Object();
pessoa2.nome = 'Ana'; //cria uma chave com valor pro objeto
pessoa2.sobrenome = 'Silva';
pessoa2.idade = 26;
pessoa2.falarnome = function () { //função dentro de objeto é conhecida como método
    console.log(`Meu nome é ${this.nome}`); //uma vantagem de criar métodos é poder usar o this pra passar o contexto da instância, ao invés de passar parâmetros
};
pessoa2.getNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa2);
pessoa2.falarnome();
console.log(pessoa2.getNascimento());

delete pessoa2.sobrenome; //apaga a chave do obj
console.log(pessoa2);


//ver chaves do objeto com for in
for (let chave in pessoa2) {
    console.log(chave);
}

//ver valores do objeto com for in
for (let chave in pessoa2) {
    console.log(pessoa2[chave]);
}

//-------------------------------------

//Factory functions (padrão de projeto)
function criaPessoaFF(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ //get ou set na frente simula chamada igual a atributo
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa3 = criaPessoaFF('Antônio', 'Coutinho');
console.log(pessoa3);
console.log(pessoa3.nomeCompleto);

//-------------------------------------

//Constructor functions (padrão de projeto)
function PessoaCF(primeiroNome, sobrenome){
    this.nome = primeiroNome;
    this.sobrenome;

    // Object.freeze(this); //não deixa alterar valores de nenhuma instância que seja criada, usar com cuidado

    // implicitamente, faz um "return this" no final
}

const pessoa4 = new PessoaCF('Mateus', 'Fernandez');
console.log(pessoa4); //exibe o construtor junto com o objeto

//ao instanciar, o token new cria um objeto vazio {} e faz this apontar pra ele, atrelado à variável (ex: pessoa4)
//em seguida, o nome da classe com os argumentos de atributos constroem a instância

// usando const, o endereço de memória que aponta pra instância do objeto não pode ser alterado, mas os valores da instância sim. Pra evitar isso, usar Object.freeze(seuObj)
Object.freeze(pessoa4);
pessoa4.nome = 'ignora alteração';
console.log(pessoa4.nome);