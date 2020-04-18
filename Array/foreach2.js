Array.prototype.forEachNew = function(callback){
    for(let i = 0; i< this.length; i++){
        callback(this[i], i, this)
    }
}


const aprovados = ['Aghata','Aldo','Daniel','Raquel']

aprovados.forEachNew( function(nome, indice) {    
        console.log(`${indice + 1}) ${nome}`)

})