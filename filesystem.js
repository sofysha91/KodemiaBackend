const fs = require("fs");

//! Create
// fs.writeFile("text1.txt", "Archivo creado desde Node", "utf-8", (err) => {
//     if(err){
//         console.log("err", err);
//         return;
//     }
//     console.log("Archivo creado")
// });


//! Read
// fs.readFile("text1.txt", "utf-8", (err, data) => {
//     if(err){
//         console.log("err", err);
//         return;
//     }
//     console.log("File data:", data);
// });


//! Update
// fs.appendFile("text1.txt", "Esto es nuevo", "utf-8", (err) => {
//     if(err){
//         console.log("error", err);
//         return;
//     }
//     console.log("Archivo actualizado");
// });


//! Delete
// fs.unlink('text1.txt', (err) => {
//     if(err){
//         console.log("error", err);
//         return;
//     }
//     console.log("Archivo eliminado");
// });


/* Async -> 
*  Sync ->
*/

//! Read directorio callback
// fs.readdir("folder1", "utf-8", (err, files) => {
//     if(err) throw err;
//     console.log("files", files);
// });

/* Ejercicio 2
* Con callbacks
* 1 - Leer los archivos de un directorio y eliminarlos.
* - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
*/

const folder = "folder1";
// fs.readdir(folder, "utf-8", (err, files) => {
//     if(err) throw err;

//     if(files.length == 0){
//         console.log("No hay archivos");
//         return;
//     }
//     console.log(files);
//     files.forEach((file) => {
//         fs.unlink(`${folder}/${file}`, (err) => {
//             if(err){
//                 console.log("error", err);
//                 return;
//             }
//             console.log(`Archivo ${file} eliminado`);
//         });
//     });
// });

/**
 * INICIO
 * Leer el contenido de la carpeta
 * Ciclar el contenido de la carpeta
 * Si no hay archivos  -> console "No hay archivos"
 * Ciclo:
 *   Verificar tipo de archivo
 *   Si es carpeta:
 *      Volver a leer el contenido de la carpeta
 *      Si esta vacio:  
 *          Imprimir que esta vacion
 *      Si no, borrar contenido
 *   Si No:
 *      eliminar el archivo
 * FIN
 */


fs.readdir(folder, "utf-8", (err, files) => {
    if(err) throw err;

    if(files.length == 0){
        console.log("No hay archivos");
        return;
    }    
    files.forEach((file) => {
        if (fs.statSync(`${folder}/${file}`).isDirectory()) {
            fs.rm(`${folder}/${file}`,{ recursive: true, force: true }, (err) => {
                if(err) throw err;
                console.log(`Directorio ${file} eliminado`);
            });
        }
        else{
              fs.unlink(`${folder}/${file}`, (err) => {
              if(err) throw err;
              console.log(`Archivo ${file} eliminado`);
            });
        } 
    });
});


/*Recursiva*/
