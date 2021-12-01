const express = require('express');
const app = express(); //convenção do uso da importação do express

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
}); //servidor express fica escutando a porta escolhida pra receber requisições

app.use(express.urlencoded({ extended: true })); //servidor express passa a tratar o req.body

//rota / (raiz) com GET
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `); //servidor do express devolve isso nas requisições GET pra "/"
});

//rota / (raiz) com POST
app.post('/', (req, res) => {
    console.log(req.body); //body armazena informações trafegadas de forma mais segura e fora da url
    res.send(`Formulário recebido: ${req.body.nome}`);
});

//params permite receber parâmetros esperados pela URL
//query permite receber mais parâmetros quaisquer pela URL
app.get('/testes/:idUsuarios/:algumParametro?', (req, res) => { // http://localhost:3000/testes/12345 (? permite que não receba o parâmetro)
    res.send(req.params.idUsuarios);
    console.log(req.params);
    console.log(req.query); //http://localhost:3000/testes/123?nome=Ana&sobrenome=Silva
})