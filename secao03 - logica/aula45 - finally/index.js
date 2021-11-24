try {
    //executado em ordem até acontecer erro, se houver
    console.log("Abri conexão com BD");
    console.log("Manipulei o BD e deu erro");
    console.log(naoExisto);
    console.log("(Não executo)");
} catch {
    // Executa apenas quando acontece um erro
    console.log("Trata o erro acima");
} finally {
    //sempre executa, tenha ou não dado erro antes
    console.log("Fecha a conexão com BD");
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Parâmetro não é instância de Date");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
}

const data = new Date("01-01-1970 12:58");

try {
    let hora = retornaHora(data);
    console.log(hora);
    hora = retornaHora();
    console.log(hora);
    hora = retornaHora("teste");
    console.log(hora);
} catch (err) {
    console.log(err.message);
} finally {
    console.log("Tenha um bom dia.");
}