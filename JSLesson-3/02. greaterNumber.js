/*jshint esversion: 6 */
function greaterNumber(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
greaterNumber([5, 3]);
greaterNumber([3, 5]);
greaterNumber([10, 10]);
greaterNumber([-5, 5]);