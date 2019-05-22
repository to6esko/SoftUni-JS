/*jshint esversion: 6 */
function number100200(input) {
    let num = Number(input.shift());
    if (num < 100) {
        console.log("Less than 100");
    } else if (num > 200) {
        console.log("Greater than 200");
    } else if (100 >= num <= 200) {
        console.log("Between 100 and 200");
    }
}

number100200([95]);
number100200([120]);
number100200([210]);