
const dia = 9;

switch(dia){

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('dia útil')
        break;
    case 1:
    case 7:
        console.log('fim de semana')
        break;
    default:
        console.log('dia invalido')
}