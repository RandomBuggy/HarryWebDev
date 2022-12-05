const mongoose = require("mongoose");

let db = mongoose.connect("mongodb://localhost/harryCart", {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {console.log("connected");});

// schema
let KittySchema = new mongoose.Schema({
    name: String
});

// adding methods to Schema

KittySchema.methods.speak = () => {
    let gretting = this.name ? `Meaw name is ${this.name}` : `I don't have any name`;
    return gretting;
};

// schema to model conversion

let Kitten = mongoose.model('Kitten', KittySchema);

// create object as documents

let harryKitty = new Kitten({'name': 'harryKitty'});
let harryKitty2 = new Kitten({'name': 'harryKitty'});
// console.log(harryKitty.name);
// harryKitty.speak();

harryKitty.save(error, harryKitty, (error, harryKitty) => {
    if (error) return console.error(error);
    harryKitty.speak();
});


harryKitty2.save(error, harryKitty2, (error, harryKitty2) => {
    if (error) return console.error(error);
    harryKitty2.speak();
});

Kitten.find({'name': 'harryKitty'}, (error, Kittens) => {
    if (error) return console.error(error);
    console.log(Kittens);
});
