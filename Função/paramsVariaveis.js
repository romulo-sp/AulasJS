function soma(){
    let soma=0
    for (i in arguments){
            soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3,4,'teste'))
console.log(soma(3,5,3,2,1,3,3,4,3,2,1))
console.log(soma())
console.log(soma())
console.log(soma())