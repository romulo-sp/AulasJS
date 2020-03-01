function tratarErroELancar(e) {
//throw new Error('dados incorretos')
//throw 10
//throw true
throw 'voce é zika'

}


function imprimirNomeGritado(obj) {

    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto'}

imprimirNomeGritado(obj)