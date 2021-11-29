//Forma acoplada
function criaPessoa1(nome, sobrenome) {
    const pessoaPrototype1 = { //cria o prototype dentro da função
        falar() {
            console.log(`${this.nome} está falando`);
        },
        comer() {
            console.log(`${this.nome} está comendo`);
        },
        beber() {
            console.log(`${this.nome} está bebendo`);
        },
    };

    return Object.create(pessoaPrototype1, { //associa o prototype ao novo objeto (bem como os atributos)
        nome: {
            value: nome,
            enumerable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true
        },
    });
}


//Forma desacoplada - composição de objeto (mixing)
const falar ={
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};

const pessoaPrototype2 = { ...falar, ...comer}; //permite escolher o que colocar no prototype
// const pessoaPrototype2 = Object.assign({}, falar, comer, beber); //mesmo resultado que acima

function criaPessoa2(nome, sobrenome) {
    return Object.create(pessoaPrototype2, { //associa o prototype ao novo objeto (bem como os atributos)
        nome: {
            value: nome,
            enumerable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true
        },
    });
}

const p1 = criaPessoa1('João', 'Silva');
console.log(Object.getPrototypeOf(p1));
p1.beber();
console.log(p1);

console.log('--------------');

const p2 = criaPessoa1('Maria', 'Borges');
console.log(Object.getPrototypeOf(p2));
p2.beber();
console.log(p2);