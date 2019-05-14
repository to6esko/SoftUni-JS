/*jshint esversion: 6 */
function rectangleArea(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    //let width = Math.max(x1, x2) - Math.min(x1, x2);
    //let height = Math.max(y1, y2) - Math.min(y1, y2);
    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let area = width * length;
    let perimeter = 2 * (width + length);
    console.log(`${area.toFixed(2)}`);
    console.log(`${perimeter.toFixed(2)}`);
}

rectangleArea([60, 20, 10, 50]);
rectangleArea([30, 40, 70, -10]);
rectangleArea([600.25, 500.75, 100.50, -200.5]);