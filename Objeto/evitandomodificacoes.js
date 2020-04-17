// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'borracha branca'
delete produto.tag
console.log(produto)

// Object.seal (não consegue adicionar ou excluir atributos, mas consegue alteralos)

const pessoa = {nome: 'Juliana', idade: 25}
Object.seal(pessoa)
console.log('selada:', Object.isSealed(pessoa))

pessoa.nome = 'Romulo'
pessoa.peso = 16
delete pessoa.nome

console.log(pessoa)

// Object.freeze =  selado + valores constantes

