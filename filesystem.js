const fs = require("fs");

/*fs.writeFile("text1.txt", "Archivo creado desde Node", "utf-8", (err) => {
    if(err){
        console.log("err", err);
        return;
    }
    console.log("Archivo creado")
} );*/


//Leer archivo
fs.readFile("index.js", "utf-8", (err, data) => {
    if(err){
        console.log("err", err);
        return;
    }
    console.log("File data:", data);
});