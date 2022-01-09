/*
Open/Closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação
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

// const discount = new FiftyPercentDiscount();
// const discount = new TenPercentDiscount();
const discount = new NoDiscount();
const shoppingCart = new ShoppingCart(discount); //injeção de dependência pra aplicar o disconto via OCP
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 39.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('Lápis', 4.9));

console.log(shoppingCart.items);
console.log(order.orderstatus);

order.checkout();
// console.log(order.orderstatus);
// console.log(shoppingCart.items);
