const soma = function (x, y){
    return x + y
  }
  
  const sub = function (x, y){
    return x - y
  }
  
  
  const imprimiResult = function (a,b, operacao=soma){
    console.log(operacao(a,b))
  }
  
  imprimiResult(1,3)
  imprimiResult(1,3,sub)
  
  imprimiResult(1,3,function(x,y){
    return x * y
  })
  
  imprimiResult(2,5,(x,y) => x * y)
  
  const carine = {
       falar() {
         console.log('#ficaPrior')
      }
  }
  
  carine.falar()