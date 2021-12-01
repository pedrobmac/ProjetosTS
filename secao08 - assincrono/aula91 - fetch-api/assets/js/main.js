//Ajax - asynchronous javascript xml
//ajax precisa executar com requisição a servidor, não adinata abrir o hmtl no navegador como arquivo


//chamando com fetch api
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href); //chama a api pro fetch

        if (response.status !== 200) throw new Error('Erro nosso');

        const html = await response.text(); //pega o retorno da api em texto
        carregaResultado(html); //converte a resposta em html
    } catch (e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}