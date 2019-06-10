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

function listarUnPost(req,res){
  var postId = parseInt(req.params.id)
  var sqlPost = "SELECT A.*, B.nombre AS usuario_nombre FROM post AS A LEFT JOIN usuarios AS B ON B.id = A.usuario_id WHERE A.id = " + postId

  con.query(sqlPost, function(error, resultado, fields){

    if(error){
      return res.status(504).send(error)
    }
    
    if(resultado.length <= 0){
      return res.status(404).send('Not found.')
    };
       
    res.send(JSON.stringify(resultado[0]))
    
  })
  
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

module.exports = {
  listar,
  crear,
  listarUnPost
};
