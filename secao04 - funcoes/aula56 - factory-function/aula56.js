//Factory Function
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        
        //get na frente do método faz ele se comportar como atributo
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // também se comporta como atributo, usado pra alterar o conteúdo do objeto
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        fala(assunto = "alguma coisa"){
            return `${this.nome} está falando sobre ${assunto}.`;
        },

        imc(){
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("André", "Martins", 1.75, 69);
console.log(p1.nome);
console.log(p1.fala("astronomia"));
console.log(p1.imc());

const p2 = criaPessoa("Ana", "Morais", 1.53, 50);
console.log(p2.nomecompleto);
p2.nomeCompleto = "Maria Oliveira Silva";
console.log(p2.nomecompleto);
console.log(p2.sobrenome);
console.log(p2.fala());
