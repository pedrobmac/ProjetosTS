const objetoA: {
  //tipagem manual de um objeto (não é comum precisar)
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoA.chaveA = "Um novo valor";
//chaveB não pode ser mudada, pois é readonly
objetoA.chaveC = "uma nova chave prevista";
objetoA.chaveD = "uma nova chave não prevista";

console.log(objetoA);
