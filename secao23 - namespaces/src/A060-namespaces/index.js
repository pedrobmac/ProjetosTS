// JS e TS não usam muito namespaces porque já trabalham com import e export de módulos por padrão
//Namespace cria um escopo isolado
/* eslint-disable @typescript-eslint/no-namespace */
//desativa warning do eslint pra usar namespace ao invés de módulos
var MeuNameSpace1;
(function (MeuNameSpace1) {
    console.log(1111);
})(MeuNameSpace1 || (MeuNameSpace1 = {}));
var MeuNameSpace2;
(function (MeuNameSpace2) {
    var nome = 'Priscila';
    //pra poder usar algo fora do namespace, precisa exportar
    var PessoaDoNameSpace = /** @class */ (function () {
        function PessoaDoNameSpace(nome) {
            this.nome = nome;
        }
        return PessoaDoNameSpace;
    }());
    MeuNameSpace2.PessoaDoNameSpace = PessoaDoNameSpace;
    var pessoa = new PessoaDoNameSpace(nome);
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.outroNome = 'Nome do outro namespace';
    })(OutroNamespace = MeuNameSpace2.OutroNamespace || (MeuNameSpace2.OutroNamespace = {}));
})(MeuNameSpace2 || (MeuNameSpace2 = {}));
// console.log(pessoa); //a instância não está disponível fora do escopo do namespace
var pessoa = new MeuNameSpace2.PessoaDoNameSpace('Júlio');
console.log(pessoa);
console.log(MeuNameSpace2.OutroNamespace.outroNome); //pode acessar várias camadas de namespace, desde que exporte
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="A060-namespaces.ts"/>
//importa o arquivo inteiro, por isso vai rodar tudo do outro também
//pra executar, só funciona se o module do tsconfig for AMD ou System (ambos bibliotecas externas)
//também precisaria configurar o outFile, ao invés de outDir
console.log(MeuNameSpace2.OutroNamespace.outroNome);
//pra compilar na mão, usar o comando: npx tsc src/A060-namespaces/index.ts --outFile src/A060-namespaces/index.js
//em seguida, executar com: node src/A060-namespaces/index.js
