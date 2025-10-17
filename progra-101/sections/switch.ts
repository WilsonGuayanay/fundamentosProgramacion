export let weeDay: number = 3;

if(weeDay <= 0){
    throw new Error('Dia de la semana no permitido!')
}

// Structura switch
switch (weeDay) {
    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
        break;
    case 3:
        console.log('Es miercoles');
        break;
    case 4:
        console.log('Es jueves');
        break;
    case 5:
        console.log('Es viernes');
        break;
    default:
        console.log('Es fin de semana!!!');
}