const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_FACEBOOK,
	user: process.env.DB_ROOT,
	password: process.env.DB_PASSWORD
});

module.exports = connection;

// connection.connect();
