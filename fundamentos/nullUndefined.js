let valor // não inicializado

console.log(valor)

valor = null // ausencia de valor

console.log(valor)
//console.log(valor.toString()) // erro!!

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // vai rodar mais não é o ideal
console.log(!!produto.preco)
// delete produto.preco (seria o ideal)

produto.preco = null

console.log(produto)

