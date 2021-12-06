export class Empresa {
  public readonly nome: string; //quando não tem nível de acesso, ele é public
  private readonly colaboradores: Colaborador[] = []; //classes também são aceitas como tipos
  // private readonly colaboradores: readonly Colaborador[] = []; //readonly no tipo faria o array ser imutável
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
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {} //forma curta de declarar os atributos da classe
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
