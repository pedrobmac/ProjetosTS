//type não pode ter nome repetido, mas interface pode, chama: Declaration merging (usar com cuidado, pra não espalhar à toa)
// type Pessoa = {
//   nome: string;
// };

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  // readonly enderecos: string[]; //não deixa trocar o tipo string[], mas não protege o conteúdo
  readonly enderecos: readonly string[]; //pra não poder incluir intens novos no vetor, ele precisa ser definido com readonly
}

interface Pessoa {
  idade?: number; //atributo opcional
}

const pessoa: Pessoa = {
  nome: 'Juliana',
  sobrenome: 'Malta',
  enderecos: ['Av. Brasil'],
  // idade: 20,
};

// pessoa.sobrenome = 'Silva'; //se tentar mudar um atributo readonly, o TS reclama
// pessoa.enderecos.push('Rua Nova');
console.log(pessoa);
