function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

semRetorno("joão", "luiz", "antonio");

const pessoa = {
  nome: "Ana",
  sobrenome: "Borges",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
