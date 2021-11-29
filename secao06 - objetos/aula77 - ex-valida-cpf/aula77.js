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

//Usando ferramentas da aula pra praticar

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); //expressão que substitui todos caracteres não numéricos por nada ('')
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    if (digito1 !== this.cpfLimpo[9]) return false;

    const digito2 = this.criaDigito(cpfParcial + digito1);
    if (digito2 !== this.cpfLimpo[10]) return false;

    return true;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

// const cpf = new ValidaCPF('111.111.111-11');
// const cpf = new ValidaCPF('000.000.000-00');
// const cpf = new ValidaCPF('705.484.450-52');
const cpf = new ValidaCPF('070.987.720-03');
if (cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}