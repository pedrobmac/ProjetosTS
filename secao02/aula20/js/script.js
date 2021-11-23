//deixa script dentro de função pra não conflitar escopo com outras ferramentas e browser
function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    function criaPessoa(nome, sobrenome, peso, altura) {
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    }

    //forma antiga
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert("!");
    //     console.log("Formulário enviado");
    // };

    //forma nova
    form.addEventListener("submit", evento => {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        const novaPessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(novaPessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;
    });

}

meuEscopo();