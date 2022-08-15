//HTTP
const http = require("http");

/**
 * 1. Se crea un servidor HTTP
 * 2. Se pone el server a escuchar (PORT)
 */

/**
 * End point
 * 1. Metodo -> GET, PUT, PATCH, DELETE, POST
 * 2. URL -> http://localhost:8080/
 * 
 * 5 Endpoints
 * GET -> localhost:8080 -> 
 * POST -> localhost:8080 ->
 * PATCH -> localhost:8080 ->
 * PUT -> localhost:8080 ->
 * DELETE -> localhost:8080 ->
 */
const server = http.createServer((request, response) => {
    //Leer el request
     // Deestructure
  const { url, method } = request

  /*console.log("method", method)
  console.log("url", url)
  // GET -> localhost:8080
  // Bienvenido estas en el get, estas leyendo
  if(method === "GET" && url === "/") {
    response.write("Bienvenido estas en el get, en home estas leyendo");
  } else if(method === "POST" && url === "/") {
    response.write("Bienvenido estas en el POST en la ruta /");
  } else if (method === "PATCH" && url === "/") {
    response.write("Bienvenido estas en el PATCH en la ruta /");
  } else if (method === "PUT" && url === "/") {
    response.write("Bienvenido estas en el PUT en la ruta /");
  } else if (method === "DELETE" && url === "/") {
    response.write("Bienvenido estas en el DELETE en la ruta /");
  } else if(method === "GET" && url === "/profile") {
    response.write("Bienvenido estas en el GET en la ruta /profile");
  }
  else {
    response.write("Esta ruta no existe");
  }
  console.log("Afuera de aqui");
    //Responde
    response.write("Hola, bienvenido al servidor mod 2");
    response.end(); // ya se finalizo*/

    const endpoints = {
        "GET" : {
            "/" :  "Bienvenido estas en GET en Home",
            "/profile" : "Bienvenido estas en GET de /profile"
        },
        "POST" : {
            "/" :  "Bienvenido estas en POST en Home",
            "/profile" : "Bienvenido estas en POST de /profile"
        },
        "PUT" : {
            "/" :  "Bienvenido estas en PUT en Home",
            "/profile" : "Bienvenido estas en PUT de /profile"
        },
        "PATCH" : {
            "/" :  "Bienvenido estas en PATCH en Home",
            "/profile" : "Bienvenido estas en PATCH de /profile"
        },
        "DELETE" : {
            "/" :  "Bienvenido estas en DELETE en Home",
            "/profile" : "Bienvenido estas en DELETE de /profile"
        }
    }
    response.write(endpoints[method][url]);
    response.end();
});

//2 Parametros
/**
 * 1 -> PORT
 * 2 -> callback -> lo que va a hacer cuando comienze a escuhar
 */
server.listen(8080, ( )=> {
    console.log("Server listening.......");
});