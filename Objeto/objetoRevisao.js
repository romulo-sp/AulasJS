// Coleção dinamica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.valor = 220

console.log(produto)

delete produto.valor
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: '89000',
        proprietario: {
            nome: 'Raul',
            idade: 57,
            endereco: {
                logradouro: 'estrada de mogi',
                numero: 555
            },
        },

        condutores: [{
            nome: 'Romulo',
            idade: 24
        },{
            nome: 'Carine',
            idade: 27
        }]

}

console.log(carro)

carro.proprietario.endereco.logradouro = 'estrada de poá'
carro.proprietario.endereco.numero = '187'

console.log(carro)