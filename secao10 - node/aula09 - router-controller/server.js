const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true })); //servidor express passa a tratar o req.body
app.use(routes); //servidor express passa a usar as rotas em outro script

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
    console.log('Acessar via http://localhost:3000');
}); //servidor express fica escutando a porta escolhida pra receber requisições

