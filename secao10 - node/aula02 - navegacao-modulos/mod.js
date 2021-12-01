module.exports = function(x, y) {
    return x * y;
}

//se for usar a função exportada dentro do próprio módulo, seria assim:
// console.log(module.exports(4, 5));