const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//forma 1 - função concat
const a3 = a1.concat(a2, 'O que mais você quiser');
console.log(a3);

//forma 2 - spread operator
const a4 = [...a1, ...a2, 'O que mais você quiser'];
console.log(a4);