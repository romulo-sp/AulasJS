const alunos = [
        { nome: 'Romulo', nota: 7.3, bolsista: true},
        { nome: 'Lucas', nota: 6.9, bolsista: false},
        { nome: 'Carine', nota: 5.7, bolsista: false},
        { nome: 'Gustavo', nota: 6.7, bolsista: false}
]

const resultado = alunos.map( a => a.nota).reduce( function(acumulador, atual) {
    console.log(acumulador,atual)
    return acumulador + atual
},0)

console.log(resultado)