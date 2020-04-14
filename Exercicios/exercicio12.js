function fatorial(n) {
        let fat = n
        for(let i = n-1; i > 0 ;i--){
        fat = fat * i
        }
        return console.log(fat)
}

fatorial(6)