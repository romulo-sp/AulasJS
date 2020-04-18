const quaseArray = {0: 'Romulo', 1: 'Carine', 2: 'Gustavo'}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
        value: function() { return Object.values(this)},
        enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Romulo','Carine','Gustavo']
console.log(quaseArray.toString(), meuArray)