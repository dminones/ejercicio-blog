const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "test_acamica",
  user: "admin",
  password: "admin"
});

module.exports = connection;

// connection.connect();
