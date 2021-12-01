const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path'); //usado pra mandar caminho absoluto abaixo (evita problemas em diferentes servidores)

app.use(express.urlencoded({ extended: true })); //servidor express passa a tratar o req.body
app.use(routes); //servidor express passa a usar as rotas em outro script
app.set('views', path.resolve(__dirname, 'src', 'views')); //aponta o view para a pasta de views
app.set('view engine', 'ejs'); //configura qual engine de view utilizar na renderização

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
    console.log('Acessar via http://localhost:3000');
}); //servidor express fica escutando a porta escolhida pra receber requisições

