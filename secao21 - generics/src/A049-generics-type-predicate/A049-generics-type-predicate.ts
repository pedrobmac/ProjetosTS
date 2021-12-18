export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber('123'));
console.log(isNumber(123));

//TS não identifica typeguard manual acima e cobra tipagem de soma e valor na lambda
//precisa demarcar com value is number pro TS entender
export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((soma, valor) => {
    if (isNumber(soma) && isNumber(valor)) {
      return soma + valor;
    }
    return soma;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3, 4));
console.log(soma(...[1, 2, 'a']));
console.log(soma('a'));
