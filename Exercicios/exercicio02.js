function qualTriangulo ( lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('o triangulo é o Equilatero')
    } else if (lado1 == lado2  || lado2 == lado3 || lado1 == lado3){
        console.log('o triangulo é Isósceles')
    } else {
        console.log('o triangulo é Escaleno')
    }
}

qualTriangulo(3,3,3)