/*jshint esversion: 6 */
function sum([arg1]) {
    let a = parseInt(arg1);
    let area = a * a;
    console.log(`Square area = ` + area);
}
sum([5]);

function printTrapezoidArea([arg1, arg2, arg3]) {
    let a = parseFloat(arg1);
    let b = parseFloat(arg2);
    let h = parseFloat(arg3);
    let area = (a + b) * h / 2;
    console.log("Trapezoid area = " + area.toFixed(2));
}

printTrapezoidArea([3, 5.2, 7.8]);

function convertInchesToCentimeters([arg1]) {
    let a = parseFloat(arg1);
    let area = a * a;
    console.log(`Square area = ` + area.toFixed(3));
}
convertInchesToCentimeters([7.35]);

function printInfo([firstName, lastName, age, town]) {
    console.log(`You are ${firstName} ${lastName}, a ${age}- years old
    person from ${town}!`);
}

printInfo(["Todor", "Krastev", 49, "Varna"]);

function calculateCircleArea([arg1]) {
    let r = parseInt(arg1);
    console.log("Area = " + Math.PI * r * r);
    console.log("Perimedter = " + 2 * Math.PI * r);
}
calculateCircleArea([10]);

function calculateRectangleArea([arg1, arg2, arg3, arg4]) {
    let x1 = parseFloat(arg1);
    let y1 = parseFloat(arg2);
    let x2 = parseFloat(arg3);
    let y2 = parseFloat(arg4);
    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);
    console.log("Area = " + (width * height));
    console.log("Perimeter = " + (2 * (width + height)));
}
calculateRectangleArea([60, 20, 10, 50]);