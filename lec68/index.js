console.log("This is index file");

const modules = require('./mod');
console.log(modules);
// console.log(modules([1,3,5,7,9]));
console.log(modules.avg([1,3,5,7,9]));
console.log(modules.name);
console.log(modules.repo);
