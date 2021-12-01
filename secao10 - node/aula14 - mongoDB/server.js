require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connetionString = process.env.CONNECTIONSTRING;
mongoose.connect(connetionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('BD conectado');
        app.emit('pronto'); //avisa ao express quando conectar ao BD
    })
    .catch(e => console.log(e));


const routes = require('./routes')
const path = require('path'); //usado pra mandar caminho absoluto abaixo (evita problemas em diferentes servidores)
const middlewareGlobal = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); //servidor express passa a tratar o req.body
app.use(express.static('./public')); //faz o express usar o conteúdo estático da pasta public
app.use(middlewareGlobal); //todas as rotas chamarão esse middleware

app.use(routes); //servidor express passa a usar as rotas em outro script
app.set('views', path.resolve(__dirname, 'src', 'views')); //aponta o view para a pasta de views
app.set('view engine', 'ejs'); //configura qual engine de view utilizar na renderização

const porta = 3000;

app.on('pronto', () => { //só escuta a porta quando o db estiver pronto
    app.listen(porta, () => {
        console.log(`Servidor executando na porta ${porta}`);
        console.log('Acessar via http://localhost:3000');
    }); //servidor express fica escutando a porta escolhida pra receber requisições
});
