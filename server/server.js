const express = require("express");
const app = express();
const parser = require("body-parser");
const port = process.env.PORT || '8080';
const controladorUsuarios = require("./controller/controladorUsuarios");
const controladorPosts = require("./controller/controladorPosts");

// Use middleware to set the default Content-Type
app.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  parser.urlencoded({
    extended: true
  })
);

app.use(parser.json());

app.get("/usuarios", controladorUsuarios.consulta);
app.get("/usuarios/:username", controladorUsuarios.byUsername);
app.get("/posts", controladorPosts.listar);
app.post("/posts", controladorPosts.crear);

app.get("/post/:id", controladorPosts.listarUnPost)

app.listen(port, function() {
  console.log("escuchando en el puerto" + port);
});
