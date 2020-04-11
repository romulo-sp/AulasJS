//let stringPontuacoes = "01,10,30,07,40,44,13,19,41"

function avaliaPontuacao(stringPontuacoes) {

    let pontuacoes = stringPontuacoes.split(",")

    let qtdeRecords = 0
    let piorJogo = 1

    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i=1;i  <= pontuacoes.length;i++){

        if (maiorPontuacao<pontuacoes[i]){
            qtdeRecords++;
            maiorPontuacao=pontuacoes[i]
        } else if(menorPontuacao>pontuacoes[i]){
            piorJogo = i +1
            menorPontuacao=pontuacoes[i]
        }

        

    }

    return [qtdeRecords, piorJogo]
}

console.log(avaliaPontuacao("15,10,30,07,40,44,13,19,41"))