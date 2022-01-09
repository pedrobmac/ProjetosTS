/*
Liskov Substitution principle
Se o(x) é uma propriedade demonstrável dos objetos x de tipo T, então o(y) deve ser verdadeiro para objetos y de tipo S, onde S é um subtipo de T.

Simplificando: subtipos precisam ser substituíveis por seus tipos base.

Exemplo: se a aplicação espera um Animal, algo do tipo Cachorro (que herda Animal) deve servir como qualquer outro Animal.

Resumindo, o LSP espera coerência entre os subtipos de um tipo.
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
