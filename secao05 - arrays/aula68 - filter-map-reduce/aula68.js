//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar resultado)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//separadamente

const numerosFiltrados = numeros.filter(num => num % 2 === 0);
console.log(numerosFiltrados);

const numerosDobrados = numerosFiltrados.map(num => num * 2);
console.log(numerosDobrados);

const numerosSomados = numerosDobrados.reduce((ac, num) => ac += num); //nesse caso, sem o segundo parâmetro ele começa com ac = 100 e num = 160
console.log('Separadamente:', numerosSomados);


//encadeado

const resultado1 = numeros.filter(num => num % 2 === 0).map(num => num * 2).reduce((ac, num) => ac += num);
console.log('Encadeado:', resultado1);


// só com reduce

const resultado2 = numeros.reduce((ac, num) => (num % 2 === 0) ? (ac += num * 2) : ac, 0);
console.log('Reduce:', resultado2);