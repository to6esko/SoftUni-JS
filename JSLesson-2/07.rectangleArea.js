/*jshint esversion: 6 */
function rectangleArea([arg1, arg2, arg3, arg4]) {
    let x1 = parseFloat(arg1);
    let y1 = parseFloat(arg2);
    let x2 = parseFloat(arg3);
    let y2 = parseFloat(arg4);

    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);
    let area = width * height;
    let perimeter = 2 * (width + height);
    console.log(`${area}`);
    console.log(`${perimeter}`);
}

rectangleArea([60, 20, 10, 50]);
rectangleArea([30, 40, 70, -10]);
rectangleArea([600.25, 500.75, 100.50, -200.5]);