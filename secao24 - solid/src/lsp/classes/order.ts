import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  //Injeção de dependência, porém descumpre a abstração, ao injetar classes diretamente ao invés de abstrações das mesmas
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderstatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho ainda vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Pedido recebido. Valor total: ${this.cart.totalWithDiscount()}`
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
