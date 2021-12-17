export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('tes', 'tando'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome); //checagem de atributo antes de dar o comando é uma forma de type guard
  // if (obj instanceof Aluno) console.log(obj.nome); //checagem de instância da classe (não do type) é uma forma de type guard

  //criar um atributo específico pra cada tipo também é uma forma de type guard
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Animal da cor', obj.cor);
  }
}

mostraNome(new Aluno('João'));

mostraNome({ tipo: 'animal', cor: 'rosa' });
