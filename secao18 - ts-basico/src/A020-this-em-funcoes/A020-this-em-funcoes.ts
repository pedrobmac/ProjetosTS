//this aqui não entra como argumento, é uma tipagem do this na função
export function funcao(
  this: Date,
  argumento1: string,
  argumento2: number
): void {
  console.log(this);
  console.log(argumento1);
  console.log(argumento2);
}

// funcao("Teste", 40); //chamada sem passar o contexto do this
funcao.call(new Date(), "Teste", 40); //chamada passando o contexto para o this com call
funcao.apply(new Date(), ["Teste", 40]); //chamada passando o contexto para o this com apply, que deixa os argumentos num vetor
