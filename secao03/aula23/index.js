/*
Operadores lógicos - Curto Circuito

JS pula outras expressões depois de definir o resultado da operação lógica 


Valores falseáveis:
0
""
null / undefined
NaN

TODO O RESTO É TRUE EM JS

*/

console.log("Luiz" && true && "Maria");
console.log("Luiz" && false && "Maria");
console.log(0 || false || null || "Teste" || true);