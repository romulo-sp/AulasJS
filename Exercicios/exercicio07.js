function baskhara(ax2,bx,c) {

    let resultado = []

    let delta = (bx ** 2) - (4 * ax2 * c)

    if (delta < 0) {
        return console.log('Delta negativo')
    }

   let x1 = (-bx + Math.sqrt(delta))/2*ax2
   let x2 = (-bx - Math.sqrt(delta))/2*ax2

    resultado.push(x1)
    resultado.push(x2)

    return console.log(resultado)
}

baskhara(1,12,-13)

baskhara(2,-16,-18)

