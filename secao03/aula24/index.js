const hora = 30;

if (hora >= 6 && hora < 12) {
    console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
    console.log("boa tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite");
} else {
    console.log("Olá!");
}