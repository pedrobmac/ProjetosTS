//pro import funcionar, precisa ativar no tsconfig a opção allowJs: true
import { soma } from './modulo';

const result = soma(10, 20) as number; //usar um type cast pra tipar o retorno da função em js
console.log(result);
