// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract idade: number;
//   protected abstract nomeCompleto(): string;
// }

//tipo não tem atributo protected nem é abstrato, nem inclui valores
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
  // nomeCompleto: () => string; //outra forma de declarar o tipo de um método
};

//tipo é um contrato aplicado via "implements"
//ao contrário de um extends, implements podem ser usados em conjunto
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Aline', 'Guimarães');
console.log(pessoa1.nomeCompleto());
