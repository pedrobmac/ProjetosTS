let varA = "A"; //deve ficar B
let varB = "B"; //deve ficar C
let varC = "C"; //deve ficar A

console.log(varA, varB, varC);

// let aux = varA
// varA = varB
// varB = varC
// varC = aux

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);