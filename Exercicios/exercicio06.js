function jurosSimples(capinicial, txjuros, meses){
        return console.log((capinicial + (capinicial * txjuros * meses)));
}

function jurosComposto(capinicial, txjuros, meses){
    return console.log(capinicial + (((1 + txjuros) ** meses)*capinicial));
}


jurosSimples(1000, 0.025, 10)

jurosComposto(1000, 0.025, 10)
