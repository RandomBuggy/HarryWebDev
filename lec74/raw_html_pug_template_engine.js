const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('view engine', 'pug');
app.use(express.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.set('static', express.static('static'));
app.get('/', (req, res) => {
    const content = "demo content";
    const template = {"title": "This is rendered by pug", "content": content};
    res.status(200).render('index.pug', template);
});

app.post('/', (req, res) => {
    console.log(req.body);
    form = req.body;
    let writable = `Client Name : ${form.name} Age : ${form.age} Gender : ${form.gender} Address : ${form.address} More Info : ${form.more} \n`;
    fs.writeFileSync('output.txt', writable);
    const params = {"message": "Your form has been submitted successfully"};
    res.status(200).render('demo.pug', params);
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`App started successfully on port ${port}`);
    }
    else {
        console.log(`Error occured`);
    }
});
