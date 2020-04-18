Array.prototype.map2 = function (callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
     newArray.push(callback(this[i],i,this))
    }
     return newArray
}

const carrinho = [
    '{ "nome": "roda1", "preco": 250 }',
    '{ "nome": "roda2", "preco": 300 }',
    '{ "nome": "roda3", "preco": 350 }',
    '{ "nome": "roda4", "preco": 499 }'
]

const transObjeto = json => JSON.parse(json)
const trasPreco = produto => produto.preco;

const resultado = carrinho.map2(transObjeto).map2(trasPreco)

console.log(resultado)