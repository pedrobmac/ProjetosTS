interface PessoaProtocolo<T, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string> = {
  nome: 'Antônio',
  sobrenome: 'Coutinho',
  idade: 40,
};

console.log(aluno1);

const aluno2: PessoaProtocolo<number, string> = {
  nome: 1,
  sobrenome: 2,
  idade: '3',
};

console.log(aluno2);

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Cibele',
  sobrenome: 'França',
  idade: 20,
};

console.log(aluno3);
