/*jshint esversion: 6 */
function equalNumbers(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());

    if (a === b && a === c && b === c) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalNumbers([1, 1, 1]);
equalNumbers([5, 5, 5]);
equalNumbers([1, 2, 3]);
equalNumbers([11, 8, 5]);
equalNumbers([13, 14, 99]);