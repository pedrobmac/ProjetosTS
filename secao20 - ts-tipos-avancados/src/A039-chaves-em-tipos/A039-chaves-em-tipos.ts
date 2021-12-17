type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  // brand: string;
  // year: string;
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Gurgel',
  year: 1970,
  name: 'Itaipú',
};

console.log(carro);
