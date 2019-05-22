/*jshint esversion: 6 */
function areaOfFigures(input) {
    let type = input.shift();
    let area = 0;
    if (type == "square") {
        let side = Number(input.shift());
        area = side * side;
    } else if (type == "rectangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b;
    } else if (type == "circle") {
        let r = Number(input.shift());
        area = Math.PI * r * r;
    } else if (type == "triangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b / 2;
    }
    console.log(`${area.toFixed(3)}`);
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);
areaOfFigures(["triangle", 4.5, 20]);