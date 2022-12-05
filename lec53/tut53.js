console.log("This is Java-Script Tutorial 53");

// function syntax
function greet(name, greetText="default value") {
    console.log(`${greetText}, ${name}!`);
    console.log(`${name} is a good boy`);
}
greet();
greet("Harry");
greet("Harry", "Good Morning");
console.log(greet("name", 'ggg'));
console.log(greet);

let returnValue = greet('t');
console.log(returnValue);

function func(a="some") {
    console.log("console logging + returning")
    return `template literal "double quote" \${a} = ${a} 'single quote'`;
    console.log("after return statement unreachable code");
}
console.log(func("jdkyr75e"));
