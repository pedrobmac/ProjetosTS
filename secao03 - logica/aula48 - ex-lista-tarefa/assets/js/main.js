const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

btnTarefa.addEventListener("click", () => {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
    limpaInput();
})

inputTarefa.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    // botaoApagar.classList.add("apagar"); //forma específica
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Apagar esta tarefa");
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = document.createElement("li");
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJson);
}

function recuperaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

recuperaTarefasSalvas();