//restrição em generics usando extends

//lê-se K é, no máximo, uma chave de O
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (obj, ch) => obj[ch];

const animal = {
  cor: 'Rosa',
  vacinas: ['V10', 'Raiva'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(vacinas, cor);
