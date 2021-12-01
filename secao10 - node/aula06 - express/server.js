const express = require('express');
const app = express(); //convenção do uso da importação do express

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
}); //servidor express fica escutando a porta escolhida pra receber requisições

//rota / (raiz) com GET
app.get('/', (req, res) => {
    res.send('Olá, mundo!'); //servidor do express devolve isso nas requisições GET pra "/"
});

//rota / (raiz) com POST
app.post('/', (req, res) => {
    res.send('Formulário recebido');
});

//rota /contato
app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato');
});