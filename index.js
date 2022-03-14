const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mysql = require("../db/mysql.js");
const mssql = require("../db/mssql.js");

const app = express();

const allowedMethods = [
    "OPTIONS",
    "HEAD",
    "CONNECT",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH"
];

var corsOptions = {
    credentials: true,
    origin: 'https://example.com',
    optionsSuccessStatus: 200,
    methods: allowedMethods
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/example/:id', (req, res) => {
    const id = req.params.id;
    
    mysql.query(`select name, age from exampleTable where id=${id}`, (err, result) => {
        if (err) console.log(err);
        
        res.json({ "name": result[0].name, "age": result[0].age });
    };
});

app.post('/example', (req, res) => {
    var name = req.body.name;
    var age = req.body.age;
});

app.delete('/example/:id', (req, res) => {
    const id = req.params.id;
});

app.patch('/example/:id', (req, res) => {
    const id = req.params.id;
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
