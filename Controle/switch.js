const imprimeResultado = function(nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}
imprimeResultado(10)
imprimeResultado(8)
imprimeResultado(6)
imprimeResultado(2.3)
imprimeResultado(11)
imprimeResultado(-1)