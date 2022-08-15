/*console.log("Hola Mundo")
console.log(process.argv)
*/

// Funcion que reciba de parametro un nombre del process.argv y si existe que imprima "Bienvenido [nombre]"
//Si no, imprime "fuera de aqui"

const welcome = (name) => {  // === undefined/null   if(!name)   
    if(name)
    {
        console.log(`Bienvenido ${name}`);
        return;
    }
    console.log("Fuera de aqui");
    
}

welcome(process.argv[2]);