let umaString = "ele disse \"eita!\" quando viu a pasta C:\\ vazia"

console.log(umaString)

// índice:   01234567
umaString = "Um texto"

console.log(umaString.concat(" num belo dia"))
console.log(umaString.indexOf("e"))
console.log(umaString.indexOf("e", 5))
console.log(umaString.lastIndexOf("m", 3))
console.log(umaString.match(/[a-z]/g)) //expressão regular
console.log(umaString.search(/[n-z]/g))
console.log(umaString.replace("Um", "Outro"))
console.log(umaString.length)
console.log(umaString.slice(6))
console.log(umaString.slice(-2)) //começa pelo final
console.log(umaString.split("t"))
console.log(umaString.toUpperCase())