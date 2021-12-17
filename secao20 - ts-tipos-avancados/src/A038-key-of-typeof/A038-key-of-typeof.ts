// type CoresObj = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

type CoresObj = typeof coresObj; //pega o tipo dos atributos de coresObj
type CoresChaves = keyof CoresObj; //pega as chaves de coresObj

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

export function traduzirCor(
  // cor: 'vermelho' | 'verde' | 'azul',
  cor: CoresChaves,
  cores: CoresObj
) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
