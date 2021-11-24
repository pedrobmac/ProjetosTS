// let tem escopo de bloco { ... }
// var só tem escopo de função

const verdadeira = true;
let nome = "Luiz";
var nome2 = "Luiz";

console.log(nome, nome2);

if (verdadeira){
    let nome = "Otávio";
    var nome2 = "Otávio";

    console.log(nome, nome2);

    if(verdadeira){
        let nome = "Antônio";
        var nome2 = "Antônio"; //muda a variável mesmo fora do bloco
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);

var sobrenome = "Silva"

function falaOi () {
    var nome2 = "Rafael"; //vale apenas dentro da função, que tem escopo especial
    var sobrenome2 = "Macedo";
    console.log(nome2, sobrenome); //acessa variável fora da função
}

// console.log(sobrenome2); // não tem acesso à var dentro da função

falaOi();

console.log(nome, nome2);


// var tem hoisting (iça pro começo do código) na declaração, mas só inicializa na linha original

console.log(sobrenome3);
var sobrenome3 = "Oliveira";

// console.log(sobrenome4); // causa erro, porque let ainda não foi declarado
let sobrenome4 = "Miranda";

//hoisting de função só acontece se for declarada da forma tradicional, função anônima e arrow não têm hoisting