let nome;
console.log(nome);
nome = "João";

console.log(nome, "nasceu em 1984.");
console.log(`Em 2000, ${nome} conheceu Maria.`);
console.log(nome, "casou-se com Maria em 2012.");

nome = "Felipe";

console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");

//JS não aceita nomes de variáeis começando por número (1var) ou separados por hífen (nome-cliente), é case sensitive
//convenção: camelCase; não usar var