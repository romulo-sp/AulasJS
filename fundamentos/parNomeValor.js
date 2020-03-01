const saudacao = 'opa' // contexto lexico (local fixo onde variavel foi definido)

function exec () {
    const saudacao = 'falaa' // contexto lexico dentro da função
    return saudacao
}

// objetos são grupos aninhados de partes nome/valor

const cliente = {

    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua dom juan',
        numero:69
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)