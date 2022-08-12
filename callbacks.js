/**
 * 1. Pedir informes
 * 2. Entrevista
 * 3. Pagar
 * 4. Inscripcion
 */

// const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false
// }

// const darInformes = (koderADarInformes, callback) => {
//     let error = null;
//     setTimeout(() => {
//         koderADarInformes.seDieronInformes = true; 

//         if(!koderADarInformes.seDieronInformes){
//             error = "No se dieron informes";
//         }

//         callback(error, koderADarInformes);
//     }, 3000);   
   
// }

// const entrevistar = (koderAEntrevistar, callback) => {
//     let error = null;
//     setTimeout(() => {
//         koderAEntrevistar.seEntrevisto = true; 

//         if(!koderAEntrevistar.seEntrevisto){
//             error = "No se entrevisto";
//         }

//         callback(error, koderAEntrevistar);
//     }, 2000);
   
// }

// const pagar = (koderAPagar, callback) => {
//     let error = null;
//     setTimeout(() => {
//         koderAPagar.sePago = true; 

//         if(!koderAPagar.sePago){
//             error = "No se pago";
//         }

//         callback(error, koderAPagar);
//     }, 5000);    
// }

// const inscribir = (koderAInscribir, callback) => {
//     let error = null;
//     setTimeout(() => {
//         koderAInscribir.seInscribio = true; 

//         if(!koderAInscribir.seInscribio){
//             error = "No se pudo inscribir";
//         }

//         callback(error, koderAInscribir);
//     }, 1000);    
// }

// const koderInformado = darInformes({...koder}, (error, koderADarInformes) => {
//     if (error){
//         console.log("error", error);
//         return;
//     }
    
//     entrevistar({...koderADarInformes}, (error, koderAEntrevistar) => {
//         if (error){
//             console.log("error", error);
//             return;
//         }
//         pagar({...koderAEntrevistar}, (error, koderAPagar) => {
//             if (error){
//                 console.log("error", error);
//                 return;
//             }
//             inscribir({...koderAPagar}, (error, koderAInscribir) => {
//                 if (error){
//                     console.log("error", error);
//                     return;
//                 }
//                 console.log("Exito", koderAInscribir);
//             });
//         });
//     });
// });

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerReceta = (pastel, callback) => {
    let error = null;
    setTimeout(() => {
        pastel.recetaLeida = true; 

        if(!pastel.recetaLeida){
            error = "No se ha leido la receta";
        }

        callback(error, pastel);
    }, 2000);   
    
}

const conseguirIngredientes = (pastel, callback) => {
    let error = null;
    setTimeout(() => {
        pastel.ingredientesConseguidos = true; 

        if(!pastel.ingredientesConseguidos){
            error = "No se han conseguido los ingredientes";
        }

        callback(error, pastel);
    }, 3000);   
        
}

const prepararMasa = (pastel, callback) => {
    let error = null;
    setTimeout(() => {
        pastel.masaPreparada = true; 

        if(!pastel.masaPreparada){
            error = "No se ha preparado la masa";
        }

        callback(error, pastel);
    }, 1000);   
        
}

const hornear = (pastel, callback) => {
    let error = null;
    setTimeout(() => {
        pastel.pastelHorneado = true; 

        if(!pastel.pastelHorneado){
            error = "No se ha horneado el pastel";
        }

        callback(error, pastel);
    }, 2000);   
        
}

const decorar = (pastel, callback) => {
    let error = null;
    setTimeout(() => {
        pastel.pastelDecorado = true; 

        if(!pastel.pastelDecorado){
            error = "No se ha decorado el pastel";
        }

        callback(error, pastel);
    }, 1000);   
        
}


/*Comenzar*/
const pastelListo = leerReceta({...pastel}, (error, pastelReceta) => {
    if (error){
        console.log("error", error);
        return;
    }
    conseguirIngredientes({...pastelReceta}, (error, pastelIngredientes) => {
        if (error){
            console.log("error", error);
            return;
        }
        prepararMasa({...pastelIngredientes}, (error, pastelMasa) => {
            if (error){
                console.log("error", error);
                return;
            }
            hornear({...pastelMasa}, (error, pastelHorneado) => {
                if (error){
                    console.log("error", error);
                    return;
                }
                decorar({...pastelHorneado}, (error, pastelDecorado) => {
                    if (error){
                        console.log("error", error);
                        return;
                    }
                    console.log("Pastel terminado! ", pastelDecorado); 
                }); 
            });
        });
    });
});