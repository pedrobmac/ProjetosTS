export class Pessoa {
  static idadePadrao = 0; //atributos também podem ser estáticos
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  // método estático é chamado sem instanciar a classe
  static falaOi(): void {
    console.log('oi!');
  }

  //exemplo de uso de static em uma classe: factory method para instanciar a própria classe
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Janaina', 'Mendonça', 44, '000.000.002-00');
console.log(pessoa1);

Pessoa.falaOi();

const pessoa2 = Pessoa.criaPessoa('Marília', 'Machado');
console.log(pessoa2);

console.log(Pessoa.cpfPadrao);
