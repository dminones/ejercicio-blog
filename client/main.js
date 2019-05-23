console.log("It works");
const servidor = "http://localhost:8080";

$.getJSON(servidor + "/posts", response => {
  console.log(response);
  const posts = response.posts;
 
    
  $("#posts").html(`<div>${posts.map(post => 
    `<h2>${post.titulo}</h2>
     <div class="entry-meta">
     <div id="posteo"></div>
    <span class="byline">
      <svg class="svg-icon" width="16" height="16" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
          
        </path><path d="M0 0h24v24H0z" fill="none"></path></svg>
        <a class="url fn n" href="https://wp-themes.com/?author=1">Theme Admin</a></span></span>	<span class="posted-on"><svg class="svg-icon" width="16" height="16" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0V0z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><path clip-path="url(#b)" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></svg><a href="https://wp-themes.com/?p=19" rel="bookmark"><time class="entry-date published" datetime="2008-10-17T04:33:51+00:00">October 17, 2008</time><time class="updated" datetime="2011-09-09T19:17:14+00:00">September 9, 2011</time></a></span>	<span class="comment-count">
            </span>
    </div>`
  )} </div>`);

  $.getJSON(servidor + "/usuarios", response => {
    console.log(response);
    username = response.usuarios
    $("#posteo").html(`<div>${username.map(post => 
      `<h2>${username.usuarios}</h2>`
      )} </div>`);

})
});
