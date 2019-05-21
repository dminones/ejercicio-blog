console.log("It works");
const servidor = "http://localhost:8080";

$.getJSON(servidor + "/posts", response => {
  console.log(response);
  const posts = response.posts;
  $("#posts").html(`<ul>${posts.map(post => `<li>${post.titulo}</li>`)} </ul>`);
});
