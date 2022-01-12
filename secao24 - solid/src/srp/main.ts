/*
Single Responsability Principle
Uma classe deve ter apenas um motivo para mudar (evite conjunções aditivas: e, bem como, também...)
Classes devem possuir apenas uma responsabilidade
Este princípio está intimamente ligado a outro, conhecido como "Separation of Concerns"
*/

import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 39.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('Lápis', 4.9));

console.log(shoppingCart.items);
console.log(order.orderstatus);

order.checkout();
console.log(order.orderstatus);

console.log(shoppingCart.items);
