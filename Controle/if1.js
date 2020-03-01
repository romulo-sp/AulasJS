function soBoaNoticia(nota) {
            if(nota >= 7) {
                console.log('Aprovado com ' + nota)
            }

}

soBoaNoticia(7.1)
soBoaNoticia(8.0)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
            if(valor) {
                console.log('É verdade... ' + valor)
            }

}

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})