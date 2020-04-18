const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() // Massa quebrou o carro haha, o Metodo "POP" sai o ultimo elemento do Araay
console.log(pilotos)

pilotos.push('Verstappen')// o método push inclui mais um atributo ao final do Array
console.log(pilotos)

pilotos.shift() // o método shift tira o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // atribui um elemento no inicio do Array
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas','Massa')// no elemento 2, não apagou nada "0", e adicionou 2 elementos
console.log(pilotos)

// remover a partir do splice

pilotos.splice(3, 1) // massa quebrou denovo, e vai cair fora com o splice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // o método Slice cria um novo array com o array anterio a partir de determinado campo.
console.log(algunsPilotos1)

const algunspilotos2 = pilotos.slice(2,4)// neste formato, se passa onde inicio e onde para para criar novo Array
console.log(algunspilotos2)


// Resumo:
/*
* pop: tira o ultimo elemento do Array
* push: atribui um elemento no final do Array
* shift: tira o primeiro elemento do Array
* unshift: atribui um elemento no inicio do Array
* splice: pode adicionar ou retirar elemento, depende do que é passado.
* slice: cria um novo array, considerando as informações passadas.
*/