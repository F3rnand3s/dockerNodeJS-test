const express = require('express');

const PORT = 8088;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log("Server is up and running at " + PORT);
