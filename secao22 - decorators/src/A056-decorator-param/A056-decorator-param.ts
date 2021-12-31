function decorator(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  return 'não apareço';
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, @decorator idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorator msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luciana', 'Oliveira', 37);
const metodo = pessoa.metodo('Olá, mundo!');
console.log(metodo);
