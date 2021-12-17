//overload faz a função se comportar de forma diferente, dependendo dos tipos de argumentos recebidos
//JS nativo não permite fazer overload, no TS precisa fazer type guard

//tipo com todas as assinaturas possíveis da função
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x, y?: number, ...args) => {
  if (args.length > 0) return x + (y || 0) + args.reduce((s, v) => s + v, 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
console.log(adder(1, 2, 3, 4));
