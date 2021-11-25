//IIFE - Immediately Invoked Function Expression
//usa () pra envolver uma função anônima e chamá-la imediatamente, isolada do escopo global

const nome = "teste";

(function (){
    const nome = "outro teste";
    console.log(nome);
})();

(function (idade, peso, altura) {
    const sobrenome = "Silva";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("José"));
    }

    falaNome();
    console.log(idade, peso, altura);
})(40, 90, 1.70);
