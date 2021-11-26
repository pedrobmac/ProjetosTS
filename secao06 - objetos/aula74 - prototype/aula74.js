/*
JS é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se refletir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos têm uma mesma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tetamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (objeto null) até encontrar (ou não) tal membro.

*/



// Construtora (molde) -> cria objeto
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Método da instância: ' + this.nome + ' ' + this.sobrenome;
}

//instanciação
const pes1 = new Pessoa('João', 'Silva'); // <-- Pessoa = função construtora
const data = new Date(); // <-- Date = função construtora

//ver __proto__ no console do navegador
console.dir(pes1); //métodos embaixo da instância (se repete a cada instância)
console.dir(data); //métodos embaixo do protoype (não repete a cada instância e economiza memória)

//toda vez que se instancia um objeto em JS, ele linka a instância com a propriedade <Objeto>.prototype, fazendo com que métodos da classe sejam compartilhados de forma transparente

Pessoa.prototype.teste = 'Oi!'; //métodos do prototype da classe são acessíveis, mas não são gravados nas instâncias
console.dir(pes1);
console.log(pes1.teste);


console.log(Pessoa.prototype === pes1.__proto__); //true


Pessoa.prototype.nomeCompleto = () => 'Método do prototype: ' + this.nome + ' ' + this.sobrenome;

//Quando o mesmo método aparece no prototype e na instância carregada, este segundo prevalece
console.log(pes1.nomeCompleto());