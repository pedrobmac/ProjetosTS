//generics é mais maleável e menos verboso que tipar fortemente com unknown
//o tipo do generics chega por parâmetro com <> ao invés de ()
//convenção usar T, U, V...

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  //o for original é mais verboso, mas também é mais performático
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5); //não precsisou colocar meuFilter<number> porque o TS já inferiu
console.log(arrayFiltrado);
