/*jshint esversion: 6 */
function radiansToDegrees(input) {
    let rad = Number(input.shift());
    let deg = rad * 180 / Math.PI;
    console.log(`${Math.round(deg).toFixed(0)}`);
}

radiansToDegrees([3.1416]);
radiansToDegrees([6.2832]);
radiansToDegrees([0.7854]);
radiansToDegrees([0.5236]);