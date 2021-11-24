// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const categoriaImc = getCategoriaImc(imc);
    const msg = `Seu IMC é ${imc} - ${categoriaImc}`;

    setResultado(msg, true);
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getCategoriaImc(imc) {
    const nivel = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau 1",
        "Obesidade grau 2",
        "Obesidade grau 3"
    ];

    if (imc >= 40) {
        return nivel[5];
    }

    if (imc >= 35) {
        return nivel[4];
    }

    if (imc >= 30) {
        return nivel[3];
    }

    if (imc >= 25) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    return nivel[0];
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = document.createElement("p");

    if (isValid) {
        p.classList.add("paragrafo-ok");
    } else {
        p.classList.add("paragrafo-erro");
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}