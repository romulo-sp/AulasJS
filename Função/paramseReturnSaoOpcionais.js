function area(altura,largura){
        const area = largura * altura
            if (area > 20) {
                console.log(`Valor acima do permitido: ${area}m2.`)
            } else {
                return area
            }
}

console.log(area(5,5))