# Ejercicio Post Feed

App fullstack para visualizar un ejercicio de feed

## Getting started

- Clonar proyecto
- Crear db
- Copiar  `/server/conexion.example.js` a  `/server/conexion.js`
- Configurar datos de db en  `/server/conexion.js`
- Ejecutar scripts de db `/db/*`
- `npm install`
- `npm start`
- Abrir archivo `/client/index.html` en el browser

La aplicacion consta de un servidor y un cliente

## Servidor

### Rutas

`/usuarios` obtiene todos los usuarios en la db
`/usuarios/:username` obtiene los datos del usuario :username en la db

`/posts` obtiene todos los posts

## Cliente

