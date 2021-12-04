let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

export function createPerson(
  //parâmetros da função
  firstName: string,
  lastName?: string
): {
  //type notation
  firstName: string;
  lastName?: string;
} {
  return {
    //corpo da função
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfThreeNumber = squareOf(3);

if (squareOfThreeNumber === null) {
  console.log("Conta inválida");
} else {
  console.log(squareOfThreeNumber);
}
