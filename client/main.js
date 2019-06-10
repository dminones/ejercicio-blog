const servidor = 'http://localhost:8080';
const url_string = window.location.href;
const url = new URL(url_string);
const userName = url.searchParams.get('username');
const idPost = url.searchParams.get('idPost');

const getPostHtml = post => { 
  return `
    
    <div id="posts">
        <div class="post">
          <hr width="10%"> 
            <a href="post.html?idPost=${post.id}"> <h1 class="tituloPost">${post.titulo}</h1> </a>
            <p>${post.contenido}</p>
            <span><p><img src="https://img.icons8.com/material/15/000000/administrator-male.png">${post.usuario_nombre}</p><p><img src="https://img.icons8.com/material/15/000000/alarm-clock.png">${post.fechaPost}</p><p><img src="https://img.icons8.com/material/15/000000/opened-folder.png">${post.categoria}</p></span>
        </div>
      </div>
  `
}
$.getJSON(servidor + "/posts", response => {
  const posts = response.posts;
  $("#posts").html(posts.map(getPostHtml));
});

$.getJSON(servidor + `/usuarios/${userName}`, (response) => {
	$('#usuarios h3').html(response.nombre);
	$('#usuarios-bio p').html(response.bio);
	$('#imagen img').attr(`src`, response.imagen);
});

$.getJSON(servidor + `/post/${idPost}`, (response)=>{

  const post = response
  
  $("#post").html(getPostHtml(post))


})