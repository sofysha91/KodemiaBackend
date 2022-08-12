/**
 * Va a cambiarse la forma de ejecutar las promesas
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> va dentro de esa funcion que se declaron como asincrona
 * 
 * Sintaxis
 */

// const funcionAsincrona = async () => {
//     // Todo lo que va adentroooo es asincrono
//     // Se puede usar el await
//     // Retorno de la funcion es una promesa
// }

// const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false,
// };

//  const darInformes = (koderAInformar) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAInformar.seDieronInformes = true;

//             if (!koderAInformar.seDieronInformes) {
//                 reject("No se pudo dar informes");
//             }

//             // Si se resuelve
//             resolve(koderAInformar);
//         }, 3000);
//     });
// };

// const entrevistar = (koderAEntrevistar) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAEntrevistar.seEntrevisto = true;

//             if (!koderAEntrevistar.seEntrevisto) {
//                 reject("No se pudo entrevistar");
//             }

//             // Si se resuelve
//             resolve(koderAEntrevistar);
//         }, 3000);
//     });
// };

// const pagar = (koderAPagar) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAPagar.sePago = false;

//             if (!koderAPagar.sePago) {
//                 reject("No se pudo pagar");
//             }

//             // Si se resuelve
//             resolve(koderAPagar);
//         }, 3000);
//     });
// };

// const inscribir = (koderAInscribir) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAInscribir.seInscribio = true;

//             if (!koderAInscribir.seInscribio) {
//                 reject("No se pudo inscribir");
//             }

//             // Si se resuelve
//             resolve(koderAInscribir);
//         }, 3000);
//     });
// };


// const recibiendoInformes = async () => {
//    const koderAInformar = await darInformes({...koder});
//    console.log(koderAInformar);
// }

// recibiendoInformes();

//? Tarea:
//Hacer el proceso del pastel con Async/Await


const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerReceta = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            pastel.recetaLeida = true;

            if(!pastel.recetaLeida){
                reject("No se pudo leer la receta");
            }
            resolve(pastel);
        }, 2000);
    });
}

const conseguirIngredientes = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.ingredientesConseguidos = true; 
    
            if(!pastel.ingredientesConseguidos){
                reject("No se han conseguido los ingredientes");
            }   
            resolve(pastel)
        }, 1000); 
    });
      
        
}

const prepararMasa = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.masaPreparada = true; 
    
            if(!pastel.masaPreparada){
                reject("No se ha preparado la masa");
            }
    
            resolve(pastel)
        }, 1000); 
    });       
}

const hornear = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.pastelHorneado = true; 
    
            if(!pastel.pastelHorneado){
                reject("No se ha horneado el pastel");
            }
    
            resolve(pastel);
        }, 2000); 
    });     
        
}

const decorar = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.pastelDecorado = true; 
    
            if(!pastel.pastelDecorado){
                reject("No se ha decorado el pastel");
            }
    
            resolve(pastel);
        }, 1000); 
    });     
        
}

const hacerPastel = async () => {
    const receta = await leerReceta({...pastel});
    const ingredientes = await conseguirIngredientes({...receta});
    const masa = await prepararMasa({...ingredientes});
    const pastelHorneado = await hornear({...masa});
    const pastelTerminado = await decorar({...pastelHorneado});

    console.log("Pastel terminado", pastelTerminado)
}

hacerPastel();