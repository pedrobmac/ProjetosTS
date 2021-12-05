type MapStringsCallback = (item: string) => string; //tipa a função pra não precisa tipar no uso. Já traz a lista de funções disponíveis pra string, por exemplo

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);

export default 1;
