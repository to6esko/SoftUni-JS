/*jshint esversion: 6 */
function circleAreaAndPerimeter([arg1]) {
    let r = parseFloat(arg1);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(`Area = ${area}`);
    console.log(`Perimeter = ${perimeter}`);
}

circleAreaAndPerimeter([3]);
circleAreaAndPerimeter([4.5]);