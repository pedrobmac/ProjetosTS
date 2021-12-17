//associação é uma ligação fraca entre classes, onde uma classe usa outra classe (representação UML: Escritor ---> Ferramenta)
//o exemplo abaixo usa a associação para fazer uma inversão de dependência: o Escritor usa o contrato Ferramenta, sem se preocupar com a implementação da última

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log(`${this.nome} não pode escrever sem uma ferramenta...`);
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está datilografando...`);
  }
}

const escritor = new Escritor('Paulo');
const caneta = new Caneta('Biro');
const maquinaEscrever = new MaquinaEscrever('Remington');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.escrever();

escritor.ferramenta = caneta;
escritor.escrever();

escritor.ferramenta = maquinaEscrever;
escritor.escrever();

escritor.ferramenta = null;
escritor.escrever();
