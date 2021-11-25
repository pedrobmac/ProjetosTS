//return retorna um valor (se houver) e termina a função

//pode envolver em um objeto literal
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

obj = criaPessoa("Maria", "Silva");
console.log(obj);
console.log(typeof obj);

//funções closure
//funções podem ser encadeadas e a função de dentro consegue enxergar o escopo da função de fora
//a função de fora está retornando a função de dentro
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo!"));
//ou ainda
const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

//outro exemplo de closure com aplicação real
function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadriplica(10));