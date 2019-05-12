/*jshint esversion: 6 */

function solove(n) {
    console.log("*".repeat(n));
    for (let i = 1; i < n - 1; i++) {
        console.log("*" + " ".repeat(n - 2) + "*");
    }
    console.log("*".repeat(n));
}
solove([3]);
solove([4]);
solove([5]);