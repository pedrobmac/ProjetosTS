function relogio() {
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;


    document.addEventListener("click", function (event) {
        const element = event.target;

        if (element.classList.contains("iniciar")) {
            relogio.classList.remove("pausado"); //controle de cor via classe css
            clearInterval(timer); //pra não rodar mais de um relógio ao mesmo tempo
            iniciaRelogio();
        }

        if (element.classList.contains("pausar")) {
            clearInterval(timer);
            relogio.classList.add("pausado");
        }

        if (element.classList.contains("zerar")) {
            relogio.classList.remove("pausado"); //controle de cor via classe css
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            segundos = 0;
        }
    });


    function criaMostradorHora(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        });
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaMostradorHora(segundos);
        }, 1000);
    }
}

relogio();