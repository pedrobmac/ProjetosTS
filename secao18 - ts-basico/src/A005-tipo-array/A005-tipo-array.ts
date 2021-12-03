//Array<T> - T[]

//usar export pro tsc considerar module style
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((mult, valor) => mult * valor, 1);
}

//usar export pro tsc considerar module style
export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor, "");
}

const result1 = multiplicaArgs(1, 2, 3, 4, 5);
console.log(result1);

const result2 = concatenaStrings("João", "da", "Silva");
console.log(result2);
