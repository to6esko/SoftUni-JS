/*jshint esversion: 6 */
function birthday(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());

    let capacity = width * length * height;
    let capacityWather = capacity * 0.001;
    let calculatePercent = percent * 0.01;
    let result = capacityWather * (1 - calculatePercent);

    console.log(result.toFixed(3));
}

birthday([85, 75, 47, 17]);
birthday([105, 77, 89, 18.5]);