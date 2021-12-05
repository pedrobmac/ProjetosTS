// & - interseção entre dois conjuntos

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; //and

const pessoa: Pessoa = {
  nome: "Maurício",
  sobrenome: "Nunes",
  idade: 30,
};

console.log(pessoa);

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "D" | "A";

type Intersecao = AB & AC & AD; //insterseção (menos usado)

export default 1;
