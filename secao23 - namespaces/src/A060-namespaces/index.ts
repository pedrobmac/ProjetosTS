/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="A060-namespaces.ts"/>
//importa o arquivo inteiro, por isso vai rodar tudo do outro também

//pra executar, só funciona se o module do tsconfig for AMD ou System (ambos bibliotecas externas)
//também precisaria configurar o outFile, ao invés de outDir
console.log(MeuNameSpace2.OutroNamespace.outroNome);

//pra compilar na mão, usar o comando: npx tsc src/A060-namespaces/index.ts --outFile src/A060-namespaces/index.js
//em seguida, executar com: node src/A060-namespaces/index.js
