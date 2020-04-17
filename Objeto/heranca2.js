// cadeia de protótipos (protorype chain)
const avo = { atrib1: 'A'} //  não recomendado
const pai = { __proto__: avo,atrib2: 'B'}
const filho = {__proto__: pai, atrib3: 'C'}

console.log(filho.atrib3,filho.atrib2 ,filho.atrib1)

const carro = {

    velAtual: 0,
    velMax: 200,
        acelerarMais(delta){
            if(this.velAtual + delta <= this.velMax){
                this.velAtual += delta;
            }else {
                this.velAtual = this.velMax
            }
        },
        status() {
            return `${this.velAtual}Km/h de ${this.velMax}`
        }


    }

    const ferrari = {
        modelo: 'F40',
        velMax: 324 // shadowing (sombramento)
    }

    const volvo = {
        modelo: 'V40',
        status(){
            return `${this.modelo}: ${super.status()}`
        }
    }

    Object.setPrototypeOf(ferrari, carro)
    Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())
