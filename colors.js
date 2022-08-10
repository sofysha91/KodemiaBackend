/**
 * Crear una funcion que reciba un nombre del proceso.
 * Y en esa misma funcion imprimirla con color arcoiris.
 * Utilizar el paquete colors
*/
const colors = require('colors'); 

const printRainbow = (string) => {
    console.log(string.rainbow);
}

printRainbow(process.argv[2]);