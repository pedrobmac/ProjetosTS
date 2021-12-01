exports.paginaInicial = (req, res, next) => {
    res.render('index'); //não precisa da extensão ejs
    next();
}

exports.trataPost = (req, res, next) => {
    console.log(req.body);
    res.send(`Formulário recebido: ${req.body.cliente}`);
}