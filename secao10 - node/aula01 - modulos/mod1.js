const nome = 'Marcelo';
const sobrenome = 'Silva';

const falaNome = () => {
    console.log(nome, sobrenome);
}

//exporta dados para outros módulos (forma longa)
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

//exporta dados para outros módulos (forma curta, sem escrever module.)
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar'; //this aponta pro module.exports


// console.log(module.exports); //mostra o que vai ser exportado neste module