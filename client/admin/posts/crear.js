const servidor = 'http://localhost:8080';
const url_string = window.location.href;
const url = new URL(url_string);
const userName = url.searchParams.get('username');
const categorias = ["Node", "JavaScript", "Otra categoria"]

const getPostHtml = usuarios => { 
  return `
  <button type="button" class="list-group-item list-group-item-action" onclick="seleccionar('${usuarios.nombre}')">${usuarios.nombre}</button>
  `
}

const categoriasHtml = datos => {
  return `
  <button type="button" class="list-group-item list-group-item-action" onclick="categoriaSeleccionada('${datos}')">${datos}</button>
  `
}

$.getJSON(servidor + "/usuarios", response => {
const user = response.usuarios;
 $("#listaUsuarios").html(user.map(getPostHtml));
});

function listarCategorias (datos) {
  $("#catGroup").html(datos.map(categoriasHtml));
}

function seleccionar (data){
  const seleccion = $("#usuario")
  seleccion.val(data)
}

function categoriaSeleccionada (data){
  const seleccion = $("#categoria")
  seleccion.val(data)
}


// wait for the DOM to be loaded
$(document).ready(function() {
  // bind 'myForm' and provide a simple callback function
  listarCategorias(categorias);
  $("#crear-post").ajaxForm({
    url: "http://localhost:8080/posts",
    type: "post",
    // En caso de éxito, se redirige a index.html
    success: function(res) {
      window.location.replace("./index.html?exito=True")
    },
    // En caso de error por validación, se muestra el mensaje de error en el contenedor para tal fin
    error: function(response, status, xhr) {
      if (response.status == 422) {
        $("#error").val(response.responseText)
        console.log(response.responseText);
      }
    }
  });
  // Si
});

