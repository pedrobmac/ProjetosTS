//interfaces sao parecidas com types, mas são específicas para modelar objetos

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

//as três formas funcionam:
// export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
// export class Pessoa implements TipoPessoa {
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Aline', 'Guimarães');
console.log(pessoa1.nomeCompleto());

//aplicando a interface num objeto literal
const pessoa2: TipoPessoa2 = {
  nome: 'Marco',
  sobrenome: 'Silva',
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  },
};

console.log(pessoa2.nomeCompleto());
