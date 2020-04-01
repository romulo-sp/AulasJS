function divisor(dividendo, divisor) {
   
    divisao = parseInt((dividendo/divisor),0)
    restdiv = dividendo%divisor

    return console.log(` a Divisao entre ${dividendo} e ${divisor} é ${divisao} e sobra ${restdiv}`)
}

divisor(15,2)