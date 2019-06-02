const servidor = 'http://localhost:8080';
const url_string = window.location.href;
const url = new URL(url_string);
const userName = url.searchParams.get('username');

const getPostHtml = post => { 
  return `
  <tr>
            <th scope="row">${post.id}</th>
            <td>${post.usuario_nombre}</td>
            <td>${post.titulo}</td>
            <td>${post.contenido}</td>
            <td>${post.categoria}</td>
            <td>
            <span class="badge badge-primary badge-pill" data-toggle="modal" data-target="#aceptarEliminar" onclick="eliminar(${post.id})">Eliminar</span> 
            <span class="badge badge-primary badge-pill" data-toggle="modal" data-target="#aceptarEliminar" onclick="editar(${post})">Editar</span>
            </td>
          </tr>

  `
}
$.getJSON(servidor + "/posts", response => {
  console.log(response);
const posts = response.posts;
 $("#posteos").html(posts.map(getPostHtml));
});

