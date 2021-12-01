const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever.js');
const ler = require('./modules/ler.js');

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Luis' },
    { nome: 'Felipe' },
];

const json = JSON.stringify(pessoas, '', 2);

escrever(caminhoArquivo, json);


async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(valor => console.log(valor.nome));
}


leArquivo(caminhoArquivo);