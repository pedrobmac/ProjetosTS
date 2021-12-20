//função decorator factory pra poder incluir argumentos
function inverteNomeECor(param1: string, param2: string) {
  //função decoradora com acesso aos parâmteros (closure)
  return function inverteNomeECor<T extends new (...args: any[]) => any>(
    target: T
  ) {
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
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

//o decorator é chamado na hora da criação da classe, independente de instanciá-la ou não
@inverteNomeECor('valor1', 'outro')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal1 = new Animal('Mico', 'dourado');
console.log(animal1);
