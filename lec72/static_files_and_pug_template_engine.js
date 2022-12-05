/* static files - direct URL -> download possible/publically available */

const express = require('express');
const pug = require('pug');
const path = require('path');
const app = express();
const port = 80;

/* for static files in express */
app.use('static', express.static('static_dir');

/* setting up template engine */
app.set('view engine', 'pug');
/* setting up template directory */
app.set('views', path.join(__dirname, 'template'));
    app.get('/', (req, res) => {
        res.status(200).send('Hello World!');
    });
    app.get('/pug', (req, res) => {
        res.status(200).render('demo', {title: "PUG Template", message: "Hello There! This is pug template"});
    });
