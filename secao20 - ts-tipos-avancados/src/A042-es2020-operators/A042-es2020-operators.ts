//Encademaneto opcional e Operador de coalescência nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const doc1: Documento = {
  titulo: 'O título',
  texto: 'Lorem ipsum',
  // data: new Date(),
};

console.log(doc1.data?.toDateString()); //<atributo>? é o encadeamento opcional - presente no JS

console.log(doc1.data?.toDateString() ?? 'Opa, não tem data...'); //<operador> ?? <ação se for não-valor> - não valor em JS é null e undefined

console.log(null ?? '1 - operador à esquerda é não valor');
console.log(undefined ?? '2 - operador à esquerda é não valor');
console.log(false ?? '3 - operador à esquerda é não valor');
console.log(0 ?? '4 - operador à esquerda é não valor');
console.log('' ?? '5 - operador à esquerda é não valor');
