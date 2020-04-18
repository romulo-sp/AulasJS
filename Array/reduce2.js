const alunos = [
    { nome: 'Romulo', nota: 7.3, bolsista: true},
    { nome: 'Lucas', nota: 6.9, bolsista: false},
    { nome: 'Carine', nota: 5.7, bolsista: false},
    { nome: 'Gustavo', nota: 6.7, bolsista: false}
]

// Desafio 1: todos os alunos são bolsistas?

const bolsista = (resultado, bolsista) => resultado && bolsista

const resultado = alunos.map(a => a.bolsista).reduce(bolsista)

console.log(resultado)

// Desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista

const resultado1 = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(resultado1)
