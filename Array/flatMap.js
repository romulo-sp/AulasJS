const escola = [{
        nome: 'turma M1',
        alunos: [{
            nome: 'Romulo',
            nota: 7.7
        },{
            nome: 'Carine',
            nota: 8.7
        }]
    },{
        nome: 'turma M2',
        alunos: [{
            nome: 'Gustavo',
            nota: 7.9
        }, {
            nome: 'Lucas',
            nota: 5.8
        }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasTurma)

console.log(notas1)

console.log([].concat([ 7.7, 8.7 ], [ 7.9, 5.8 ]));

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)
