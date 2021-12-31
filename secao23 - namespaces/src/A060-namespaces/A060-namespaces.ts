// JS e TS não usam muito namespaces porque já trabalham com import e export de módulos por padrão
//Namespace cria um escopo isolado

/* eslint-disable @typescript-eslint/no-namespace */
//desativa warning do eslint pra usar namespace ao invés de módulos

namespace MeuNameSpace1 {
  console.log(1111);
}

namespace MeuNameSpace2 {
  const nome = 'Priscila';

  //pra poder usar algo fora do namespace, precisa exportar
  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNameSpace(nome);
  console.log(pessoa);

  export namespace OutroNamespace {
    export const outroNome = 'Nome do outro namespace';
  }
}

// console.log(pessoa); //a instância não está disponível fora do escopo do namespace

const pessoa = new MeuNameSpace2.PessoaDoNameSpace('Júlio');
console.log(pessoa);

console.log(MeuNameSpace2.OutroNamespace.outroNome); //pode acessar várias camadas de namespace, desde que exporte
