type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // +this._items converte a string resultante do toFixed() pra number
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho ainda vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Pedido recebido. Valor total: ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras esvaziado');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get orderstatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 39.9 });
shoppingCart.addItem({ name: 'Caderno', price: 19.9 });
shoppingCart.addItem({ name: 'Lápis', price: 4.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.orderstatus);

shoppingCart.checkout();
console.log(shoppingCart.orderstatus);

console.log(shoppingCart.items);
