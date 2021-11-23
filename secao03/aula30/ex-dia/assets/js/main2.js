const data = new Date();
const h1 = document.querySelector(".container h1");

const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
//h1.innerHTML = Intl.DateTimeFormat('pt-BR', opcoes).format(data);