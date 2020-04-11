function anoBissexto(ano) {
    if(ano % 400 == 0){
        return console.log([`O ano ${ano} é Bissexto`,true]);
    } else if (ano % 100 == 0){
        return console.log([`O ano ${ano} não é Bissexto`,false]);
    } else if(ano % 4 == 0){
        return console.log([`O ano ${ano} é Bissexto`,true]);
    } else {
        return console.log([`O ano ${ano} não é Bissexto`,false]);
    }

}

anoBissexto(2016)