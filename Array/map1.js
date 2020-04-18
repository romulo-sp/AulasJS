const nums = [1,2,3,4,5]

const resultado = nums.map( function(e){
    return e * 2
})

console.log(resultado)

const soma50 = e => e + 50;
const triplo = e => e * 3;
const grana = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado2 = nums.map(soma50).map(triplo).map(grana);

console.log(resultado2)