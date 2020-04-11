// pessoa -> 123 -> {...} o endereço do objeto é constante, porém o dado contido não.

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} não pode, pois está mudando o endereço do objeto, logo, da erro
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'rua'
delete pessoa

console.log(pessoa.nome)
console.log(pessoa)