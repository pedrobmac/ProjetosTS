// const qualquerCoisa = require('./mod1').qualquerCoisa; //importa apenas um item com caminho relativo
const mod1 = require('./mod1'); //importa módulo inteiro com caminho relativo
const falaNome = mod1.falaNome; //associa variável diretamente à função importada, após importar
// console.log(mod1);
// console.log(qualquerCoisa);

falaNome();

const { Pessoa } = require('./mod2'); //// importa módulo desestruturando objeto importado, via caminho relativo

const p1 = new Pessoa('André');
console.log(p1);


//módulos padrão do Node e módulos instalados via npm não precisam do caminho, apenas o nome
const path = require('path'); //padrão do Node

// const axios = require('axios'); //disponibilizado via npm install axios
// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then( res => console.log(res.data))
//     .catch(e => console.log(e));