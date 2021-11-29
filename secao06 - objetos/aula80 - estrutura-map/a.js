//Map é uma estrutura de mapa simples de chave/valor

const pessoas = [
    { id: 3, nome: 'Rafael' },
    { id: 2, nome: 'Luiz' },
    { id: 1, nome: 'Ana' },
];

const novasPessoas1 = {};
// for (const { id, nome } of pessoas) { //desestruturação no próprio for
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas1[id] = { ...pessoa }; //melhor desestruturar dentro do laço, se forem muitos campos
}
console.log(novasPessoas1); //mudou a ordem: 3, 2, 1 -> 1, 2, 3 e o id virou string


const novasPessoas2 = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas2.set(id, { ...pessoa }); //melhor desestruturar dentro do laço, se forem muitos campos
}
console.log(novasPessoas2); //mudou a ordem: 3, 2, 1 -> 1, 2, 3

console.log(novasPessoas2.get(2));
console.log(novasPessoas2.get(99)); //undefined


for (const pessoa of novasPessoas2){
    console.log(pessoa); //retorna num array
}


for (const [idenfitier, { id, nome }] of novasPessoas2){ //com desestruturação
    console.log(idenfitier, id, nome);
}

novasPessoas2.delete(2);

for (const pessoas of novasPessoas2.keys()){
    console.log(pessoas);
}


for (const pessoas of novasPessoas2.values()){
    console.log(pessoas);
}