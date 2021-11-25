const pessoas = ['Eduardo', 'Maria', 'Rafael', 'Joana', 'Mateus'];

const nomes = pessoas; //tudo que fizer em um, reflete no outro, pois copia a referêcia de memória

nomes[2] = 'Felipe'; //altera conteúdo manualmente
delete nomes[3] //apaga conteúdo, deixando espaço vazio
console.log(pessoas);


//funciona pra string, objeto, função, number, mas usar o construtor dos principais tipos não é comum
const nomes2 = new Array(...nomes); //spread


const valorRemovidoFim = nomes2.pop(); //remove o último elemento do array
const valorRemovidoComeco = nomes2.shift(); //remove o primeiro elemento do array, atualizando índices (cuidado com a performace)
nomes2.push('João'); //adiciona no fim
nomes2.unshift('Pedro'); //adiciona como primeiro elemento do array, atualizando índices (cuidado com a performace)
console.log(nomes2);


const comprimento = nomes.length;
console.log(comprimento);

const novo = nomes2.slice(1, -2); //extrai uma parte, passando os índices (negativo conta do fim ao começo)
console.log(novo);


const nomeCompleto = "Antônio Luis de Souza";
const nomeDividido = nomeCompleto.split(" "); //separa string pelo caractere passado por argumento e salva num array
console.log(nomeDividido);

const todasPessoas = pessoas.join(", "); //junta elementos de um array numa string, colocando o argumento passado entre cada elemento
console.log(todasPessoas);