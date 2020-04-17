function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 120)
const aula2 = new Aula('flwss', 251)
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'slave', 222)
const aula4 = novo(Aula,'flwss', 222351)

console.log(aula3, aula4)