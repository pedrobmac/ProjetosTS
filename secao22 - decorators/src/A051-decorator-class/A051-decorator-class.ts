//decorator é um objeto impostor, que a partir de um objeto, o altera, substitui, agrega ou decora

// //forma manual
// export class Animal {
//   constructor(public nome: string, public cor: string) {}
// }

// //função decoradora
// function decorator<T extends new (...args: any[]) => any>(target: T) {
//   console.log('Oi, eu sou o decorator');
//   return class extends target {
//     cor: string;
//     nome: string;

//     constructor(...args: any[]) {
//       super(...args);
//       this.nome = this.inverte(args[0]);
//       this.cor = this.inverte(args[1]);
//     }

//     inverte(valor: string): string {
//       return valor.split('').reverse().join('');
//     }
//   };
// }

// const AnimalDecorated = decorator(Animal); //decorator acontece aqui
// const animal1 = new AnimalDecorated('Mico', 'dourado');
// console.log(animal1);

//forma com @
@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

//função decoradora
function decorator<T extends new (...args: any[]) => any>(target: T) {
  console.log('Oi, eu sou o decorator');
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

const animal1 = new Animal('Mico', 'dourado');
console.log(animal1);
