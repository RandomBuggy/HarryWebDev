const mongoose = require("mongoose");

let db = mongoose.connect("mongodb://localhost/harryCart", {useNewUrlParser: true, useUnifiedTopology: true});
db.once('open', () => {console.log("connected");});
