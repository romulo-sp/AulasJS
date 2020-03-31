const valor = 'Global'

function minhaFuncao() {
  const valor = 'local'
  console.log(valor)
}

function exec(){
  
  minhaFuncao()
}

exec()
