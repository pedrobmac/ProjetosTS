// Tuple
const dadosCliente1: [number, string, string?] = [1, "Bob"];
const dadosCliente2: readonly [number, ...string[]] = [
  1,
  "Bob",
  "Vieira",
  "Junior",
];

dadosCliente1[0] = 100;
dadosCliente1[1] = "Foo";

console.log(dadosCliente1);
//readonly choca com o pop()
// dadosCliente2.pop();
console.log(dadosCliente2);

//readonly array
const array1: readonly string[] = ["Luiz", "Alberto", "Lima"];
const array2: ReadonlyArray<string> = ["Luiz", "Alberto", "Lima"];

console.log(array1, array2);
