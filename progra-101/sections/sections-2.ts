// .log es un metodo de la consola que permite imprimir mensajes en la terminal
console.log('Hola Mundooo!');

let numberOfLines = 0;

// Creacion de una funcion
function increaseLineNumber() {
    numberOfLines += 3
}

export function printLineNumber() {
    numberOfLines++;
    console.log('Linea #', numberOfLines);
}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();
