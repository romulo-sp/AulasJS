function Carro(velocidadeMaxima = 200, delta= 5){
    //atributo privado
    let velocidadeAtual = 0
    //atributopublico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
          velocidadeAtual += delta
        } else {
          velocidadeAtual = velocidadeMaxima
        }
    }
  
    // metodopublico
    this.getVelocidadeAtual = function(){
      return velocidadeAtual;
    }
  }
  
  const uno = new Carro
  
  for (let i = 0; i < 50; i++){
    uno.acelerar()
    console.log(uno.getVelocidadeAtual())
  }
  
  const ferrari = new Carro(350, 50)
  ferrari.acelerar()
  ferrari.acelerar()
  ferrari.acelerar()
  
  console.log(ferrari.getVelocidadeAtual())