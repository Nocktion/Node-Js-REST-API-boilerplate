const mysql = require("mysql");

const sql = mysql.createConnection({
    host: 'mysql.example.com',
    port: '3306',
    user: 'exampleUser',
    password: 'ReallyReallyStrongExamplePassword',
    database: 'example-db'
});

sql.connect(err => {
    if (err) {
        console.log("MySQL connection failed");
        console.log(err);
    } else {
        console.log("MySQL connection successful");
    }
});

module.exports = sql;