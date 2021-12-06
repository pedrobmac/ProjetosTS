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
  getNomeCompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome; //exemplo de polimorfismo
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno1 = new Aluno('Maria', 'Silveira', 22, '000.000.001-00');
const pessoa1 = new Pessoa('Janaina', 'Mendonça', 44, '000.000.002-00');
const cliente1 = new Cliente('Marcelo', 'Queiroz', 53, '000.000.003-00');

console.log(pessoa1);
console.log(aluno1.getIdade());
console.log(cliente1.getNomeCompleto());
