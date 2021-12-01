exports.paginaInicial = (req, res) => {
    res.render('index'); //não precisa da extensão ejs
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(`Formulário recebido: ${req.body.nome}`);
}