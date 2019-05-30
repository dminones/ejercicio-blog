console.log("It works");
const servidor = "http://localhost:8080";

const getPostHtml = post => { 
  return `
    
    <div id="posts">
        <div class="post">
          <hr width="10%"> 
            <h1 class="tituloPost">${post.titulo}</h1>
            <p>${post.contenido}</p>
            <span><p><img src="https://img.icons8.com/material/15/000000/administrator-male.png">${post.usuario_nombre}</p><p><img src="https://img.icons8.com/material/15/000000/alarm-clock.png">${post.fechaPost}</p><p><img src="https://img.icons8.com/material/15/000000/opened-folder.png">${post.categoria}</p></span>
        </div>
      </div>
  `
}
$.getJSON(servidor + "/posts", response => {
  console.log(response);
  const posts = response.posts;
  $("#posts").html(posts.map(getPostHtml));
});
