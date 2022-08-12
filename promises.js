/**
 * Promesa -> Nos da el resultado de un proceso asincrono
 * Reglas:
 *  1. Pending  - In progress
 *  2. Rejected - Si fue rechazada
 *  3. Accepted - Si fue aceptada
 * 
 * Al momento de hacer la promesa, declaracion de la promesa
 * Las promesas se resuelven o se rechazan
 * 
 * Al momento de ejecutarlas, recibir el rechazo o la respuesta
 * .then -> para recibir lo resuelto
 * .catch -> para recibir lo rechazado (error)
*/

// const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false,
// };

// const darInformes = (koderAInformar) => {
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

// const koderInformado = darInformes({ ...koder });
// koderInformado
//     .then((koderInformado) => {
//         console.log(koderInformado);

//         // Entrevistar
//         entrevistar({ ...koderInformado })
//             .then((koderEntrevistado) => {
//                 console.log("koderEntrevistado", koderEntrevistado);

//                 // Pagar
//                 pagar({ ...koderEntrevistado })
//                     .then((koderPagado) => {
//                         console.log("El koder fue pagado", koderPagado);

//                         // Inscribir
//                         inscribir({ ...koderPagado })
//                             .then((koderInscrito) => {
//                                 console.log("Exito", koderInscrito);
//                             })
//                             // Error de inscribir
//                             .catch((error) => {
//                                 console.log("error", error);
//                             });
//                     })
//                     // Error de pagar
//                     .catch((error) => {
//                         console.log("Error", error);
//                     });
//             })
//             // Error de entrevistar
//             .catch((error) => {
//                 console.log("error", error);
//             });
//     })
//     // Error de informar
//     .catch((error) => {
//         console.log("error", error);
//     });

// /***
//  * Pastel
//  * 1 - Leer la receta
//  * 2 - Conseguir los ingredientes
//  * 3 - Preparacion de la masa
//  * 4 - Hornear el pastel
//  * 5 - Decorar el paster
//  */

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


/*Comenzar*/
const pastelCompleto = leerReceta({...pastel});

pastelCompleto.then((pastel) => {
    conseguirIngredientes({...pastel})
    .then((pastelIngredientes) => {
        prepararMasa({...pastelIngredientes})
        .then((masaPastel) => {
            hornear({...masaPastel})
            .then((pastelHorneado) => {
                decorar({...pastelHorneado})
                .then((pastelTerminado) => {
                    console.log("El pastel ya esta completo", pastelTerminado)
                })
                .catch((error) => {
                    console.log("Error: ", error);
                })
            })
            .catch((error) => {
                console.log("Error:", error);
            })
        })
        .catch((error) => {
            console.log("Error:", error);
        })
    })
    .catch((error) => {
        console.log("Error:", error);
    })
})
.catch((error) => {
    console.log("Error:", error);
});


