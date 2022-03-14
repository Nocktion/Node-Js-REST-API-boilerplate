const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

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
});

app.post('/example', (req, res) => {
  
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
