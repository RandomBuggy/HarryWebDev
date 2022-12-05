console.log("This is a module");

function average(arg) {
    let sum = 0;
    arg.forEach((element) => {
        sum += element;
    });
    return sum / arg.length;
}
/* tel explicitly to export the function with the module */
// module.exports = average;

module.exports = {
    avg: average,
    name: "Harry",
    repo: "Github"
};
