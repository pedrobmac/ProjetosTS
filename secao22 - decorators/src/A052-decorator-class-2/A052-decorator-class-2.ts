//função decoradora
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Sou o decorator e recebi o', target);

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

//o decorator é chamado na hora da criação da classe, independente de instanciá-la ou não
@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// const animal1 = new Animal('Mico', 'dourado');
// console.log(animal1);
