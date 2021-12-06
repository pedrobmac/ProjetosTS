export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  //na forma curta, pegar os parâmetros da classe mãe e só colocar o nível de acesso dos atributos que pertençam à classe filha (último atributo do exemplo abaixo)
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Executa algo antes');
    return super.getNomeCompleto(); //acessa o método da classe mãe via super
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    const result = super.getNomeCompleto(); //acessa o método da classe mãe via super
    return result + ' é o nome do cliente';
  }
}

const aluno1 = new Aluno('Maria', 'Silveira', 22, '000.000.001-00', 'SALA22');
const pessoa1 = new Pessoa('Janaina', 'Mendonça', 44, '000.000.002-00');
const cliente1 = new Cliente('Marcelo', 'Queiroz', 53, '000.000.003-00');

console.log(pessoa1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());

console.log(aluno1);
