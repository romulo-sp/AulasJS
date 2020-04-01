function mostraValor (valor){

       local = valor.toLocaleString('pt-br', {style: 'currency', currency:'BRL'});
        return local.replace('.',',')
}

console.log(mostraValor(0.1+0.2))

