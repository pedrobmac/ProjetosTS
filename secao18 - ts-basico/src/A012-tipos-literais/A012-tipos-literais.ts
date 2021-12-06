//const é um tipo literal

const a = 10;

let x: 10 = 10; //eslint-disable-line
x = 0b1010;
// x = 11;

let b = 100 as const; //eslint-disable-line

const pessoa = {
  nome: "Ana" as const,
  sobrenome: "Silva",
};

// pessoa.nome = "Luana";

console.log(a, b, x, pessoa);

function escolherCor(cor: "Vermelho" | "Verde" | "Azul"): string {
  return cor;
}

// console.log(escolherCor("Cinza"));

//Module mode
export default 1;
