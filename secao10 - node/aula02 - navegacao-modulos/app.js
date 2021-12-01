const multiplicacao = require('./mod'); //geralmente quando o arquivo é js, não precisa colocar a extensão (ex: mod2.js -> mod2)

console.log(multiplicacao(2, 3));


const Cachorro = require('./mod2');
const c1 = new Cachorro('Tito');
c1.latir();


//navegação: ./ vai pra frente, ../vai pra trás

console.log(__filename); //traz o caminho absoluto do arquivo atual
console.log(__dirname); //traz o caminho absoluto da pasta atual


const path = require('path'); //módulo do node com ferramentas pra navegar em pastas de difernetes OS
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); //se vira pra voltar duas pastas e acessar arquivos/imagens/