// usando a nota literal

const obj1 = {}
console.log(obj1)

// Object em JS, somente o Object é uma função criadora de objeto,
// quando se coloca "new Objeto", essa função cria o Objeto em si.

console.log( typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funções contrutoras

function produto(nome,preco,desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new produto('caneta de ouro', 99.99, 0.20)
const p2 = new produto('carro',29999.99, 0.05)

console.log( p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome,salario,faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('Romulo',7000,3)
const f2 = criarFuncionario('Carine', 8100, 3)

console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna JSON

const fromJSON = JSON.parse('{"info" : "Sou um JSON"}')
console.log(fromJSON.info)
