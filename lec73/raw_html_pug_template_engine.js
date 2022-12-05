const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('static', express.static('static'));
app.get('/', (req, res) => {
    const content = "demo content";
    const template = {"title": "This is rendered by pug", "content": content};
    res.status(200).render('index.pug', template);
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`App started successfully on port ${port}`);
    }
    else {
        console.log(`Error occured`);
    }
});
