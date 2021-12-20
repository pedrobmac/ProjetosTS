function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);

  return {
    // writable: false,
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  metodo(msg: string): string {
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

const pessoa = new UmaPessoa('Joaquim', 'Lutz', 58);
// pessoa.metodo = () => 'Alterei o método da classe'; //TS não reclama, mas como o decorator define o método com writable: false, o código não funciona mais
const metodo = pessoa.metodo('Olá, mundo!');
console.log(metodo);
