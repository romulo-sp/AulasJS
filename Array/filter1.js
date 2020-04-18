const produtos = [
    { nome: 'NoteBook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
        return p.fragil == true
}))

console.log(produtos.filter(function(p){
        return p.preco > 2400
}))

const fragil = f => f.fragil === true
const caro = f => f.preco >= 500

console.log(produtos.filter(fragil).filter(caro))