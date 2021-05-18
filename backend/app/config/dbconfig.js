const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "root",
    database: "finalprojectgames",
});


module.exports = pool;