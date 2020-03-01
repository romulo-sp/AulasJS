let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log('os verdadeiros')
console.log(!!3)// negação dupla com qualquer valor diferente de 0 é true 
console.log(!!-1)// variavel inteira é true
console.log(!!' ')// um espaço é true
console.log(!!'texto')// qualquer texto é true
console.log(!![])// um vetor é true
console.log(!! {})// um método é true
console.log(!!Infinity)// é true
console.log(!!(isAtivo = true)) // é true pois a informação contida é true

console.log('os falsos')
console.log(!!0)// zero é falso
console.log(!!'') // um "vazio" é false
console.log(!!null) // false
console.log(!!NaN)
console.log(!!undefined)