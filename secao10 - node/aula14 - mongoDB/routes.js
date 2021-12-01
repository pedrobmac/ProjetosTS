const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    req.session = { nome: 'João', sobrenome: 'Antunes'};
    console.log('Passei pelo middeware');
    next();
}

//rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => console.log('Mais uma etapa depois da resposta do ' + req.session.nome)); //cada função é uma etapa pra dar a resposta, podendo conter vários middlewares. o req compartilha dados entre todos
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;