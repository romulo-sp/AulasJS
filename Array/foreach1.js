const aprovados = ['Aghata','Aldo','Daniel','Raquel']

aprovados.forEach( function(nome, indice) {    // no forEach, sempre é passo primeiro o elemento, e depois o indice
        console.log(`${indice + 1}) ${nome}`)

})

// e se quiser, no terceiro indice, pode-se passar também o array completo.

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)
