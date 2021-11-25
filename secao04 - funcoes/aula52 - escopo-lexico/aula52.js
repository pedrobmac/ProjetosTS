//dentro de uma função, as variáveis são resolvidas no escopo mais próximo
//se não achar a variável no próprio escopo, busca nos níveis cada vez mais acima

const nome = "Pedro"; //prioridade 2

function falaNome() {
    const nome = "Rafael"; //prioridade 1
    console.log(nome);
}

function usaFalanome(){
    const nome = "Otávio"; //ignora sempre, pois a função considera onde foi declarada, não onde é chamada
    falaNome();
}

usaFalanome();