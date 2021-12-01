// cpf fictícios pra testar:
// 705.484.450-52 / 070.987.720-03


class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia() { //pode usar letras acentuadas em variáveis e funções, mas a prática é escrever em inglês
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemVerificador = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemVerificador);
        const digito2 = ValidaCPF.geraDigito(cpfSemVerificador + digito1);
        this.novoCpf = cpfSemVerificador + digito1 + digito2;
    }

    //geraDigito não tem nenhuma menção à this, então pode se tornar estático
    static geraDigito(cpfSemVerificador) {
        let total = 0;
        let reverso = cpfSemVerificador.length + 1;

        for (let digito of cpfSemVerificador) {
            // console.log(digito, reverso);
            total += reverso * Number(digito);
            reverso--;
        }

        const digitoVerificador = 11 - (total % 11);
        return digitoVerificador < 10 ? String(digitoVerificador) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }
}

// let validaCpf = new ValidaCPF('070.987.720-03');
// // validaCpf = new ValidaCPF('999.999.999-99');
// if (validaCpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }