// criar um objeto em formato de JSON, depois traforma-lo em Objeto, ]
//depois extrair somente o atributo preço mapeando o objeto com o map

const carrinho = [
    '{ "nome": "roda1", "preco": 250 }',
    '{ "nome": "roda2", "preco": 300 }',
    '{ "nome": "roda3", "preco": 350 }',
    '{ "nome": "roda4", "preco": 499 }'
]

const transObjeto = json => JSON.parse(json)
const trasPreco = produto => produto.preco;

const resultado = carrinho.map(transObjeto).map(trasPreco)

console.log(resultado)