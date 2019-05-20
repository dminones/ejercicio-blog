var con = require("../conexion");
function consulta(req, res) {
  var sql = "select * from usuarios";

  con.query(sql, function(error, respuesta, fields) {
    if (error) {
      console.log("Hubo un error en la conexion", error.message);
      return res.status(404).res.send("hubo un error en la conexion");
    }
    var response = {
      usuarios: respuesta
    };
    res.send(JSON.stringify(response));
  });
}

module.exports = {
  consulta: consulta
};
