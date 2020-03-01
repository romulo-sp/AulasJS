{
    {
        {
            {
                var sera = 'será??'
            }
        }
    }
}

console.log(sera) // é visivel, pois se torna uma variavel global

function teste (){
    var local = 123
    console.log(local)
}

teste()