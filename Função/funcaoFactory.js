// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
//contexto lexico em ação.




const x = 'Global'

function fora(){
  const x = 'local'
    function dentro(){
      return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())





// essa função retorna 'local', pois o escopo em que está a função 'dentro()' 
//possui a declaração do x= local.. e este é o contexto lexico.. 
// e a função fora() retorna o obj que é uma função 'dentro'