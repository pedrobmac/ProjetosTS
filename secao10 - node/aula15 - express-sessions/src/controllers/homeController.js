const HomeModel = require('../models/HomeModel');

// HomeModel.create({ //cria a base (se não existir) e inclui o registro
//     titulo: 'Outra coisa qualquer',
//     descricao: 'Outra descrição de testes.'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

//busca os registros da base
// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'Manoela', logado: true }; //essa sessão está configuada pra durar 7 dias, mesmo fechando tudo
    console.log(req.session.usuario);
    req.flash('info', 'Mensagem de info'); //prepara mensagem pra só aparecer uma vez
    req.flash('error', 'Mensagem de error'); //prepara mensagem pra só aparecer uma vez
    req.flash('success', 'Mensagem de success'); //prepara mensagem pra só aparecer uma vez
    console.log(req.flash('info'), req.flash('error'), req.flash('success')); //depois de exibir as mensagens, elas desaparecem
    res.render('index'); //não precisa da extensão ejs
    next();
}

exports.trataPost = (req, res, next) => {
    console.log(req.body);
    res.send(`Formulário recebido: ${req.body.cliente}`);
}