/*
Interface Segregation Principle
os clientes não devem ser forçados a depender de protocolos* que não utilizam (*: interface, type ou membros abstratos)
*/

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
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

// const discount = new FiftyPercentDiscount();
// const discount = new TenPercentDiscount();
const discount = new NoDiscount();
const shoppingCart = new ShoppingCart(discount); //injeção de dependência pra aplicar o disconto via OCP
const messaging = new Messaging();
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
