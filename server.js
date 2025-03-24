const http = require('http');
const express = require('express');

const app = express();

//const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Waleed');
});


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});