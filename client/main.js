const servidor = 'http://localhost:8080';
const url_string = window.location.href;
const url = new URL(url_string);
const userName = url.searchParams.get('username');

$.getJSON(servidor + '/posts', (response) => {
	const posts = response.posts;
	$('#posts').html(`<ul>${posts.map((post) => `<li>${post.titulo}</li>`)} </ul>`);
});

$.getJSON(servidor + `/usuarios/${userName}`, (response) => {
	const usuarios = response.nombre;
	const imagen = response.imagen;
	const usuariosBio =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, itaque. Commodi vero recusandae tempora hic architecto facilis quidem quas quibusdam?';
	$('#usuarios').html(` <h3> ${usuarios} </h3>`);
	$('#usuarios-bio').html(`<p> ${usuariosBio} </p>`);
	$('#imagen').html(`<img src=${imagen}> `);
});
