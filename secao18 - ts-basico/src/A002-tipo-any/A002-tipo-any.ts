//utilizar ny apenas em último caso. ele significa um tipo genérico. O ideal é que o TS seja sempre bem tipado, sem any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage("Oi!"));
console.log(showMessage(1));
