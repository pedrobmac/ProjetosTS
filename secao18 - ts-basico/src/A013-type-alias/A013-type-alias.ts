type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: "Rafael",
  idade: 37,
  salario: 20_000, //TS entende como 20000
  // corPreferida: "Verde",
};

//Module mode
export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }; //shallow copy
}

console.log(setCorPreferida(pessoa, "Verde"));
console.log(pessoa);
