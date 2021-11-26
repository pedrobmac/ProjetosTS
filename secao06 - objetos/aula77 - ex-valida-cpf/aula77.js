/*
Algoritmo para validar CPF:

Exemplo: 705.484.450-52

Passo 1 - gerar 10º dígito (1º validador)

7   0   5   4   8   4   4   5   0
x   x   x   x   x   x   x   x   x
10  9   8   7   6   5   4   3   2
=   =   =   =   =   =   =   =   =
70 +0  +40 +28 +48 +20 +16 +15 +0 = 237

11 - (237 % 11) = 5 (primeiro dígito) OBS: se esse valor for maior que 9, o resultado é 0

Passo 1 - gerar 11º dígito (2º validador)

7   0   5   4   8   4   4   5   0   5 (passo anterior)
x   x   x   x   x   x   x   x   x   x
11  10  9   8   7   6   5   4   3   2
=   =   =   =   =   =   =   =   =   =
77 +0  +45 +32 +56 +24 +20 +20 +0  +10 = 284

11 - (284 % 11) = 2 (segundo dígito) OBS: se esse valor for maior que 9, o resultado é 0


cpf fictícios pra testar:
705.484.450-52 / 070.987.720-03

*/

const cpf = '705.484.450-52';
const cpfNumerico = cpf.replace(/\D+/g, ''); //substitui todos os caracteres que não sejam números por ''. (Obs: mantém como string porque CPF pode começar por 0)
console.log(cpfNumerico);
const cpfNumericoArray = Array.from(cpfNumerico);
console.log(cpfNumericoArray);