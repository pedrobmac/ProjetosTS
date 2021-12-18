const arrayNumeros1: number[] = [1, 2, 3, 4, 5, 6];
const arrayNumeros2: Array<number> = [1, 2, 3, 4, 5, 6];

//já infere <number>
async function promiseAsync1() {
  return 1;
}

promiseAsync1().then((resultado) => console.log(resultado + 1));

type MeuTipo = number;

//precisa tipar manualmente porque o TS não verifica
export function promiseAsync2(): Promise<number | MeuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
}

promiseAsync2().then((resultado) => console.log(resultado + 1));
