const sql = require('mssql')

const sqlConfig = {
    user: 'exampleUser',
    password: 'ReallyReallyStrongExamplePassword',
    database: 'example-db',
    server: 'mssql.example.com'
}

sql.connect(config, (err) => {
    if (err) {
        console.log("MSSQL connection failed");
        console.log(err);
    } else {
        console.log("MSSQL connection successful");
    }
});

module.exports = sql;