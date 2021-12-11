export abstract class Personagem {
  protected abstract emoji: string; //atributos abstratos obrigam classes filhas concretas a implementarem o mesmo.

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    // console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    //o emoji do personagem pode ser referenciado na classe mãe, que o declarou abstrato
    console.log(`${this.emoji} ${this.nome} ficou com ${this.vida} de vida...`);
  }

  abstract bordao(): void; //método abstrato obriga classes filhas concretas a implementarem. método abstrato não pode ter corpo
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' Sofra minha ira!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'GRAWWLL');
  }
}

// const abstrato = new Personagem('a', 0, 0); //classes abstratas não podem ser instanciadas

const jogador1 = new Guerreiro('Guerreira', 7, 45);
const monstro1 = new Monstro('Monstro', 2, 30);

jogador1.atacar(monstro1);
jogador1.atacar(monstro1);
monstro1.atacar(jogador1);
jogador1.atacar(monstro1);
monstro1.atacar(jogador1);
