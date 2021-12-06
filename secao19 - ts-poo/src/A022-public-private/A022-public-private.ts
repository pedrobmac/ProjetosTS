export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {} //no atalho precisa especificar quando é public
}

const empresa1 = new Empresa('Minha empresa 1', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Ana', 'Silva');
const colaborador2 = new Colaborador('João', 'Vieira');
const colaborador3 = new Colaborador('Marcos', 'Nogueira');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

//Structural typing - TS não liga desde que os campos sejam compatíveis
empresa1.adicionaColaborador({
  nome: 'Pedro',
  sobrenome: 'Alves',
});

// empresa1.nome = "readonly não deixa mudar";
console.log(empresa1);
console.log(empresa1.nome);
empresa1.mostrarColaboradores();

console.log('Redundante:', empresa1.nome, empresa1.getNome());
