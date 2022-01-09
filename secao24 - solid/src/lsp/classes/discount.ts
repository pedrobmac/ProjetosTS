export abstract class Discount {
  protected discount = 0;

  // calculate(price: number): unknown { //forçando a quebra de tipo pra não seguir o LSP
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  //de forma sutil, alterar o comportamento do método da classe mãe quebra o LSP
  calculate(price: number): number {
    return price;
  }
}
