const alunos = ["Luiz", "Maria", "João"];

alunos[0] = "Eduardo";
alunos[3] = "Luiza"; //adiciona manualmente no final
alunos[alunos.length] = "Rafael"; //adiciona manualmente no final
alunos.push("Pedro"); //adiciona no final
alunos.unshift("Luiza"); //adiciona no começo

console.log(alunos);
console.log(alunos[1]);

aluno = alunos.pop(); //tira do final
console.log(aluno)

delete alunos[3]; //apaga de qualquer posição e deixa um espaço vazio
console.log(alunos);

console.log(alunos[50]); //undefined
console.log(alunos.slice(0, 2));
console.log(alunos.slice(0, -3));

console.log(typeof alunos); //object
console.log(alunos instanceof Array); //true