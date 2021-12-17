//a composição é a relação mais forte entre classes, onde uma classe faz parte de outra classe. uma não existe sem a outra
// representação UML: Carro <|>------ Motor (diamante preenchido)

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado.');
  }

  acelerar(): void {
    console.log('Motor está acelerando.');
  }

  parar(): void {
    console.log('Motor está parando.');
  }

  desligar(): void {
    console.log('Motor está desligado.');
  }
}

const carro = new Carro(); //não precisa instanciar o Motor fora do carro, daí a composição
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
