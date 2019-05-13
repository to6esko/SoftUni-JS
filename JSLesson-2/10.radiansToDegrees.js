/*jshint esversion: 6 */
function radiansToDegrees([arg1]) {
    let rad = parseFloat(arg1);
    let deg = rad * 180 / Math.PI;
    console.log(`${Math.round(deg)}`);
}

radiansToDegrees([3.1416]);
radiansToDegrees([6.2832]);
radiansToDegrees([0.7854]);
radiansToDegrees([0.5236]);