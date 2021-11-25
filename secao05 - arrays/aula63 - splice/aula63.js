// negativo    -5         -4       -3        -2       -1
// índice       0          1        2         3        4
const nomes = ['Eduardo', 'Maria', 'Rafael', 'Joana', 'Mateus'];

//nomes.splice(qual índice começar a mexer, quantos elementos remover, n elementos a adicionar separados por vírgula)

//push
nomes.splice(nomes.length, 0, 'Lindomar');
console.log('Push:', nomes);

//unshift
nomes.splice(0, 0, 'Gabriel');
console.log('Unshift:', nomes);

//pop
let removidos = nomes.splice(-1, 1); //salva removidos num array, mesmo se operar 0 ou 1 elementos
console.log('Pop', nomes, removidos);

//shift
removidos = nomes.splice(0, 1);
console.log('Shift', nomes, removidos);

//Adicionar e remover do meio do array
removidos = nomes.splice(1, 3, 'André', 'Márcio');
console.log('Splice', nomes, removidos);