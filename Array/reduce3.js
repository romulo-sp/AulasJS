Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1

    let acumulador = valorInicial || this[0]
    
    for(let i = indiceInicial; i < this.length;i++){
        acumulador = callback(acumulador, this[i], i, this)
   }
   return acumulador
}

const soma = (total, valor) => total + valor

const nums = [2,5,2,5,6,7,2]

console.log(nums.reduce2(soma, 3))