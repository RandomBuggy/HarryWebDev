const express = require(`express`);
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const path = require(`path`);
const port = 8000;

let db = mongoose.connect("mongodb://localhost/contactDance", {useNewUrlParser: true, useUnifiedTopology: true});


// schema
let contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});


// schema to model conversion
let Contact = mongoose.model('Contact', contactSchema);


const app = express();

// express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("Item is not saved to the database");
    });
    // res.status(200).render('contact.pug');
});



// start the server
app.listen(port, () => {
    console.log(`The server is startee on port ${port}`);
});
