export class Pessoa {
  constructor(
    private _nome: string, //usando padrão novo de get/set, é convenção começar nome da variável com _
    private sobrenome: string,
    private idade: number,
    private cpf: string
  ) {
    this.nome = _nome; //já chama o setter na hora de construir a classe
  }

  //forma antiga pra declarar
  getCpf(): string {
    return this.cpf.replace(/\D/g, ''); //getter e setter podem ser úteis pra tratar um dado antes de passar
  }

  //forma antiga de delcarar
  setCpf(valor: string): void {
    this.cpf = valor;
  }

  //forma nova de declarar, que se comporta como um atributo
  get nome(): string {
    return this._nome;
  }

  set nome(valor: string) {
    //set não tem tipagem do retorno
    this._nome = valor;
  }
}

const pessoa1 = new Pessoa('Janaina', 'Mendonça', 44, '000.000.002-00');
pessoa1.setCpf('123.123.123-12');
console.log(pessoa1.getCpf());

pessoa1.nome = 'Lucas';
console.log(pessoa1.nome);
