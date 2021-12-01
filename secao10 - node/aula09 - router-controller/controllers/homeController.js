exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `); //servidor do express devolve isso nas requisições GET pra "/"
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(`Formulário recebido: ${req.body.nome}`);
}