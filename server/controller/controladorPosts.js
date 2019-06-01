let con = require("../conexion");

function listar(req, res) {
  let sql = "select A.*, B.nombre as usuario_nombre from post AS A LEFT JOIN usuarios AS B ON B.id = A.usuario_id;"

  con.query(sql, (error, respuesta) => {
    if (error) {
      return res.status(404).send("hubo un error en la consulta");
    }
    let response = {
      posts: respuesta
    };
    res.send(JSON.stringify(response));
  });
}

function crear(req, res) {
  const data = req.body;
  const usuario = data.usuario;
  const categoria = data.categoria;
  let usuarioId;
  con.query("select id from test_acamica.usuarios where nombre = '" + usuario + "'", (error, respuesta) => {
    if (error) {
      return res.status(404).send(error);
    }
    usuarioId = respuesta[0].id;
    let sql = `insert into post (titulo,contenido, usuario_id, categoria) values ('${data.titulo}','${data.contenido}','${usuarioId}', '${categoria}')`;

    con.query(sql, (error, respuesta) => {
      if (error) {
        return res.status(404).send(error);
      }
      res.send(JSON.stringify(respuesta));
    });
  })
}

function eliminar(req, res) {
  const data = req.params.id;
 con.query("delete from test_acamica.post where id=" + data, (error, respuesta) => {
    if (error) {
      return res.status(404).send(error);
    }
    res.send(JSON.stringify(respuesta));
 });
}

function consulta(req, res) {
 con.query("select * from test_acamica.usuarios", (error, respuesta) => {
    if (error) {
      return res.status(404).send(error);
    }
    let response = {
      usuarios: respuesta
    };
    res.send(JSON.stringify(response));
 });
}


module.exports = {
  listar,
  crear,
  eliminar,
  consulta
};
