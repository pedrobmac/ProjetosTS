/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes, detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes).
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
// import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import {
  // FiftyPercentDiscount,
  // TenPercentDiscount,
  NoDiscount,
} from './classes/discount';
import {
  EnterpriseCustomer,
  //IndividualCustomer
} from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// const discount = new FiftyPercentDiscount();
// const discount = new TenPercentDiscount();
const discount = new NoDiscount();
const shoppingCart = new ShoppingCart(discount); //injeção de dependência pra aplicar o disconto via OCP

// Fazer uma classe depender de interfaces pode ser útil também em testes mockados
// const messaging = new Messaging();
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem mockada: ', msg);
  }
}
const messaging = new MessagingMock();

const persistency = new Persistency();
// const customer = new IndividualCustomer('Pedro', 'Rangel', '123.456.789-00');
const customer = new EnterpriseCustomer('Empresa S.A.', '12.345.678/0001-00');
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('Camiseta', 39.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('Lápis', 4.9));

console.log(shoppingCart.items);
console.log(order.orderstatus);

order.checkout();
// console.log(order.orderstatus);
// console.log(shoppingCart.items);
