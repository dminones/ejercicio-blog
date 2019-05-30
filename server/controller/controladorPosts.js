let con = require("../conexion");

function pedirPosts(req, res) {
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

module.exports = {
  pedirPosts: pedirPosts
};
