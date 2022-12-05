/* first express app */
const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 80;

app.get('/', (req, res) => {
    res.send('This is response and my first express app');
});

app.get('/about', (req, res) => {
    res.status(200).send('With status code 200 - OK');
});

app.listen(port, hostname, (error) => {
    if (!error) {
        console.log(`App started successfully on port ${port}`);
    }
    else {
        console.log(`error occured`);
    }
});
