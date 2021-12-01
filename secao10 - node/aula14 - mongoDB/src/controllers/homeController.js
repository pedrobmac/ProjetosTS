const HomeModel = require('../models/HomeModel');

// HomeModel.create({ //cria a base (se não existir) e inclui o registro
//     titulo: 'Outra coisa qualquer',
//     descricao: 'Outra descrição de testes.'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

//busca os registros da base
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    res.render('index'); //não precisa da extensão ejs
    next();
}

exports.trataPost = (req, res, next) => {
    console.log(req.body);
    res.send(`Formulário recebido: ${req.body.cliente}`);
}