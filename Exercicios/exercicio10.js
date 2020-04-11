function verificadiv(num) {
    if (num % 3 == 0){
        return [true, num]
    } return [false, num]
}

console.log(verificadiv(4))
console.log(verificadiv(7))
console.log(verificadiv(33))
console.log(verificadiv(39))
console.log(verificadiv(41))
console.log(verificadiv(45))
