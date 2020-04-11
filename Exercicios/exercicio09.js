
function avaliation(nota = 0){

    if(nota < 38){
        return console.log(`Aluno reprovado com a nota ${nota}`)
    } else if(nota % 5 < 3){
       nota = nota + (5-(nota % 5))
       return console.log(`Aluno Aprovado com a nota ${nota}`)
    }
   
}

avaliation(44)