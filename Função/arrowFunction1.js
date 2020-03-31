let dobro = function(a) {
    return a *2
}

dobro = (a) => {
    return a*2
}

dobro = a => a * 2 //  returno está implicito

console.log(dobro(Math.PI))

let ola = function (){

    return 'Olá'
}

ola = () => 'Olá'

console.log(ola())