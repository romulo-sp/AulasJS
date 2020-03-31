// funcção Factory é a que produz objetos..

function criarPessoa() {

    return {
      nome: 'ana',
      idade: 24
    }
}

console.log(criarPessoa())

function criarProduto(nome,preco) {
    return {
      name: nome,
      preco: preco,
      desconto:'10%'
    }
}

console.log(criarProduto('bombril',50))