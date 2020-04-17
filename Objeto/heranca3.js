const pai  = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai)

filha1.nome = 'ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
        nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'andre'
console.log(filha2.nome) // o writable congela a variavel, e não autoriza modificações.

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

    for(let key in filha2) {
       if(!filha2.hasOwnProperty(key)){
        console.log(key) , console.log(`por Herança: ${filha2.corCabelo}`)
       }
    }

