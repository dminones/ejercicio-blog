const servidor = 'http://localhost:8080';
const url_string = window.location.href;
const url = new URL(url_string);
const userName = url.searchParams.get('username');

$.getJSON(servidor + '/posts', (response) => {
	const posts = response.posts;
	$('#posts').html(`<ul>${posts.map((post) => `<li>${post.titulo}</li>`)} </ul>`);
});

$.getJSON(servidor + `/usuarios/${userName}`, (response) => {
	$('#usuarios h3').html(`${response.nombre}`);
	$('#usuarios-bio p').html(`${response.bio}`);
	$('#imagen img').attr(`src`, `${response.imagen}`);
});
