/*
Object.values - retorna os valores
Object.entries - retorna chaves e valores
copia = Object.assign({}, origem) - copia objetos
Object.getOwnPropertyDescriptor(obj, chave) - retorna propriedades de uma chave de um objeto
... (spread) - pode ser usado pra copiar chave/valor de um objeto para outro independente

//Já vimos
Object.keys - retorna as chaves
Object.freeze - congela os valores e chaves
Object.defineProperty - define propriedades pra uma chave (ver aula71)
Object.defineProperty - define propriedades pra várias chaves (ver aula71)
*/

const p1 = {
    nome: 'Caneca',
    preco: 14.99,
    aumentaPreco(){
        this.preco += 1;
    },
};

// const outraCoisa = produto; //copia referência para objeto
const p2 = { ...p1 }; //copia para outro objeto independente com spread
const p3 = Object.assign({}, p1); //copia para outro objeto independente com Object.assign
console.log(p1, p2, p3);

p2.nome = 'Garrafa';
p3.preco = 18.45;
console.log(p1, p2, p3);


//keys retorna as chaves do objeto num array
console.log(Object.keys(p1));


//freeze trava alteração de chaves e valores do objeto
Object.freeze(p2);
p2.nome = 'nome ignorado';
console.log(p2.nome);


// getOwnPropertyDescriptor retorna em um objeto as propriedades de uma chave de um objeto
console.log(Object.getOwnPropertyDescriptor(p3, 'nome'));


//values retorna os valores do objeto num array
console.log(Object.values(p1));

//entries retorna as chaves e valores do objeto num array de arrays pra cada chave/valor
console.log(Object.entries(p1));