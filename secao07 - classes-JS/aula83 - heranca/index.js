class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);


class Smartphone extends DispositivoEletronico { //extends torna classe Smartphone "filha" de DispositivoEletronico
    constructor(nome, cor, modelo) {
        super(nome); //super passa os parâmetros pra preencher atributos em comum com a classe "mãe"
        this.cor = cor; //atributo exclusivo da classe filha
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('HiPhoner', 'Laranja', "X1000");
s1.ligar();
console.log(s1);

class Pager extends DispositivoEletronico {}
const p1 = new Pager("meu pager");
p1.ligar();
console.log(p1);


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() { //sobreescreve método para classe filha
        console.log('Método ligar alterado para Tablet');
    }

    falaOi() { //método exclusivo da classe filha
        console.log('Oi!');
    }
}

const t1 = new Tablet("tablet", true);
t1.ligar();
console.log(t1);
t1.falaOi();

//uma classe mãe pode ter várias filhas, mas cada classe filha só estende uma mãe
//pode criar quantos níveis de classes quiser, mas evitar fazer mais de 3 níveis por causa do acoplamento