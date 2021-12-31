import validator from 'validator';
import _ from 'lodash';
//ao instalar um pacote novo, ex: npm i lodash, instalar também os types pra autocomplete e validação de tipo, ex: npm i @types/lodash -D

console.log(validator.isEmail('nome@email.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
