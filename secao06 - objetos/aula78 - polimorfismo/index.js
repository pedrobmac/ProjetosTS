//JS permite polimorfismo de sobreescrita, mas não o polimorfismo de sobrecarga


//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
    } else {
        console.log('Saldo insuficiente!');
    }
    
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/Ct: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 10)
// console.log(conta1);

// conta1.depositar(10.50);
// conta1.sacar(20);
// conta1.sacar(1);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//polimorfismo de sobreescrita no método sacar, para ele se comportar de forma diferente com a classe filha
ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) >= valor) {
        this.saldo -= valor;
    } else {
        console.log('Saldo insuficiente!');
    }
    
    this.verSaldo();
};

const cc2 = new ContaCorrente(22, 33, 0, 100);
cc2.depositar(10);
cc2.sacar(90); //usa método sobreescrito para Conta corrente
cc2.sacar(20);
cc2.sacar(0.01);


function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const cc3 = new ContaPoupanca(33, 44, 0, 100);
cc3.depositar(20);
cc3.sacar(15);
cc3.sacar(50); //usa método sobreescrito para Conta corrente