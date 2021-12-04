//tipo never é usado em casos onde a aplicação nunca retorna da função
// void significa que a função retorna, mas sem parâmetro de retorno
export function criaErro(): never {
  throw new Error("Erro qualquer");
}

criaErro();
