const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if(err) {
        console.error("MySQL connection failed.", err.message);
        return;
    }
    console.log("Connected to MySQL database");
});
module.exports = connection; 