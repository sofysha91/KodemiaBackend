/**
 *  Funcion que separe los nombres largos de los cortos, los nombres largos son de mas de 4 caracteres
 *  Input: ["", ....]
 *  Output: const [nombres Cortos, nombresLargos]
 */

 const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ]

const separaNombres = (nombres) => {
    let nombresCortos = [];
    let nombresLargos = [];
    nombres.forEach(nombre => {
        if(nombre.length <= 4 ){
            nombresCortos.push(nombre);            
        }
        else{
            nombresLargos.push(nombre);
        }
        
    });
    return [nombresCortos, nombresLargos];
}
// let [nombresCortos, nombresLargos] = separaNombres(nombres);

// console.log("Nombres cortos ", nombresCortos);
// console.log("Nombres largos ", nombresLargos);

/**
 * Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
Input: ["Ale", "Mariana", "Adrian"]...
Output:
{
	0: {
		name: "Ale", -> string
		length: 3, -> numero
		isGreaterThanFour: true -> booleano
	}
}
*/

const transformarNombres = (nombres) => {  
    
    return nombres.reduce((prev, nombre, index) => {        
        return {...prev, [index]: { 
            name: nombre,
            length: nombre.length,
            isGreaterThanFour : nombre.length > 4
        }}
    }, {}); 

}

let objNombres = transformarNombres(nombres);
console.log(objNombres);