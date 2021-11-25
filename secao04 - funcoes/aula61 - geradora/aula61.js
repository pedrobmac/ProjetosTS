//função que faz lazy evaluation
//ex: retorna o primeiro valor na primeira chamada, o segundo na segunda, o terceiro na terceira e depois não tem mais o que devolver

function* geradora1() {
    console.log('só rodo na 1ª chamada');
    yield 'valor 1';
    console.log('só rodo na 2ª chamada');
    yield 'valor 2';
    console.log('só rodo na 3ª chamada');
    yield 'valor 3';
}

const g1 = geradora1();
// console.log(g1); //Object [Generator]
//console.log(g1.next()); //traz retorno e se já acabou
console.log(g1.next().value);
console.log('algum código');
console.log(g1.next().value);
console.log('algum código');
console.log(g1.next().value);
console.log('algum código');
console.log(g1.next());

console.log('------------');

//pode ser iterada num laço
const g1b = geradora1();
for (let valor of g1b) {
    console.log(valor);
}


console.log('------------');

function* geradora2() {
    let i = 0;
    while (true) { //pode não ter um fim definido
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
for (i = 0; i <= 5; i++) {
    console.log(g2.next().value);
}


console.log('------------');

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); //delega pra outra geradora até exaurir
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}


console.log('------------');

function* geradora5(){
    yield function () {
        console.log("vim do y1");
    };

    // algum código...

    yield function () {
        console.log("vim do y2");
    };
    
    return function () {
        console.log('vim do return');
    };

    yield "nunca chega aqui, por causa do return"
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1(); //y1
func2(); //y2
func3(); //return

console.log(g5.next()); // não devolve nada depois da chamada que alcança o return