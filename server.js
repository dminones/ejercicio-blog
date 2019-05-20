const express = require("express");
const app = express();
const parser = require("body-parser");
const port = "8080";
const controladorUsuarios = require("./controller/controladorUsuarios");
const controladorPosts = require("./controller/controladorPosts");

app.get("/usuarios", controladorUsuarios.consulta);
app.get("/posts", controladorPosts.pedirPosts);

app.listen(port, function() {
  console.log("escuchando en el puerto" + port);
});
