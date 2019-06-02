
function eliminar (data){

  $('#aceptarEliminar').on('hidden.bs.modal', function (e) {
    // do something...
    console.log("funciono")
  })
  const borrar = servidor + "/eliminar/" + data;
  $.ajax({
    url: borrar,
    type: 'DELETE',
    success: function(resultado) {
      // Do something with the result
      window.location.replace("./index.html?exito=True");
    }
});
}


  
