const servidor = 'http://localhost:8080';
const url_string = window.location.href;
const url = new URL(url_string);
const userName = url.searchParams.get('username');

const getPostHtml = post => { 
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    titulo: ${post.titulo} / contenido:  ${post.contenido}
    <span class="badge badge-primary badge-pill"  onclick="eliminar(${post.id})">Eliminar</span>
  </li>
  `
}
$.getJSON(servidor + "/posts", response => {
  console.log(response);
const posts = response.posts;
 $("#posts").html(posts.map(getPostHtml));
});

function eliminar (data){
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


  
