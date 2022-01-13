import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  //Injeção de dependência, porém descumpre a abstração, ao injetar classes diretamente ao invés de abstrações das mesmas
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
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
      `
      Pedido recebido.
      Cliente: ${this.customer.getName()} / ${this.customer.getIDN()}
      Valor total: ${this.cart.totalWithDiscount()}
      `
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
