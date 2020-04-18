console.log(typeof Array,typeof new Array, typeof [] )

let aprovados =  new Array ('Bia','Romulo','Carlos') // cração de uma array

console.log(aprovados)

aprovados = ['Bia','Romulo','carlos'] // outra forma de criar Array, de forma literaria

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'joão' // atribuindo ao tamanho do array e atribuindo novo atributo

console.log(aprovados[3])

aprovados.push('Abia') // atribuindo e aumentando o Array com o método push, que adiciona a informação no final do Array
console.log(aprovados.length)

aprovados[9] = 'Carine'
console.log(aprovados[8] === undefined)
console.log(aprovados.length) // aprovados utilizando a função de length, que faz a contagem do tamanho do array

console.log(aprovados)
aprovados.sort() // utilizando o método sort(), que faz a ordenação do array de forma ascendente
console.log(aprovados)

delete aprovados[1] // deletando um dado do array manualmente, sem alteração de ordenação

console.log(aprovados)
aprovados.splice(1,1) //  inlcui ou exclui dados do array.. se passa primeiro o indice do campo, e em seguida o tamanho para exluir.
console.log(aprovados)
aprovados.splice(1,1, 'elemento1', 'elemento2') // neste caso, tirou um elemento e adicionou 2 em seu lugar e jogou os demais para frente

console.log(aprovados)

