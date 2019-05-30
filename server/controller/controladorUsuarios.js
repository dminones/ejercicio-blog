var con = require("../conexion");
function consulta(req, res) {
  var sql = "select * from usuarios";

  con.query(sql, function(error, respuesta, fields) {
    if (error) {
	  console.log("Hubo un error en la conexion", error.message);
      return res.status(404).send("hubo un error en la conexion");
    }
    var response = {
      usuarios: respuesta
    };
    res.send(JSON.stringify(response));
  });
}

function byUsername(req, res) {
  var sql = `select * from usuarios where username= '${req.params.username}'`;

  con.query(sql, function(error, respuesta, fields) {
    if (error) {
      console.log("Hubo un error en la conexion", error.message);
      return res.status(404).res.send("hubo un error en la conexion");
    }
    if (respuesta && respuesta.length > 0) {
      const usuario = respuesta[0];
      return res.send(JSON.stringify(usuario));
    }
    return res.status(404);
  });
}

module.exports = {
  consulta,
  byUsername
};
