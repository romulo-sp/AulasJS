function compras(trabalho1,trabalho2) {

    const comprarSorvete = trabalho1 || trabalho2
    const compraTv50 = trabalho1 && trabalho2
    //const compraTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (comparação bit a bit)
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete:comprarSorvete,
        compraTv50c: compraTv50,
        compraTv32:compraTv32,
        manterSaudavel:manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))