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
  let sql = `insert into post (titulo,contenido, usuario_id) values ('${
    data.titulo
  }','${data.contenido}',1)`;

  con.query(sql, (error, respuesta) => {
    if (error) {
      return res.status(404).send(error);
    }
    res.send(JSON.stringify(respuesta));
  });
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

module.exports = {
  listar,
  crear,
  eliminar
};
