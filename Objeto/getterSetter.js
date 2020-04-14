const sequencia = {
	
	_valor:1, // colocar um "_"  antes do atributo, é uma convesão para informar que será "privado"
	get valor(){ return this._valor++ },
	set valor(valor){ 
		if (valor > this._valor){

			this._valor = valor}
		}
}

console.log(sequecia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 10

console.log(sequecia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 5

console.log(sequecia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 30

console.log(sequecia.valor, sequencia.valor, sequencia.valor)