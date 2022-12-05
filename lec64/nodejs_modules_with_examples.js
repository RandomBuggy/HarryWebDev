// three types of modules : 1.built-in, 2.custom, 3.third-party

const fs = require('fs');
const text = fs.readFileSync("temp.txt", "utf-8");
console.log(text);
let te = "Some random text";
fs.writeFileSync("temp2.txt", te);
console.log("Writing Done");
