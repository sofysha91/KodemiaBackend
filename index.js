// HTTP
const express = require("express");
const app = express();

// Empezabamos a escuchar

app.get("/", (request, response) => {
    response.write("Hola Bienvenido al get de Home")
    response.end()
});
  
app.get("/profile", (request, response) => {
response.write("Hola Bienvenido al get de Profile")
response.end()
});

/**
 * Hacer el CRUD con express
 */
app.post("/", (request, response) => {
    response.write("Hola Bienvenido al POST de Home")
    response.end()
});
  
app.post("/profile", (request, response) => {
    response.write("Hola Bienvenido al POST de Profile")
    response.end()
});

app.put("/", (request, response) => {
    response.write("Hola Bienvenido al PUT de Home")
    response.end()
});
  
app.put("/profile", (request, response) => {
    response.write("Hola Bienvenido al PUT de Profile")
    response.end()
});

app.patch("/", (request, response) => {
    response.write("Hola Bienvenido al PATCH de Home")
    response.end()
});
  
app.patch("/profile", (request, response) => {
    response.write("Hola Bienvenido al PATCH de Profile")
    response.end()
});

app.delete("/", (request, response) => {
    response.write("Hola Bienvenido al DELETE de Home")
    response.end()
});
  
app.delete("/profile", (request, response) => {
    response.write("Hola Bienvenido al DELETE de Profile")
    response.end()
});






app.listen("8080", () => {
    console.log("Servidor escuchando")
});