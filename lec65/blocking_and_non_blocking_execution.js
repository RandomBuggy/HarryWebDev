// node - blocking and non-blocking execution
console.log("The Blocking and Non-Blocking Execution");

// synchronous or blocking - line by line execution
// asynchronous or non-blocking - line by line execution not guaranteed  , callbacks will fire
// JS works on Asynchronous/Non-Blocking I/O model and callbacks
const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (error, data) => {console.log(data)});
console.log("As Asynchronous first programme go ahead but after background activity, the callback function fires");


