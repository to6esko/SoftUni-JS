/*jshint esversion: 6 */
function inchesToCentimeters(input) {
    let inches = Number(input.shift());
    let centimeters = inches * 2.54;
    console.log(`${centimeters.toFixed(2)}`);
}
inchesToCentimeters([5]);
inchesToCentimeters([4.5]);