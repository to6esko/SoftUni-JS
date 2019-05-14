/*jshint esversion: 6 */
function danceHall(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let side = Number(input.shift());

    let area = (lenght * 100) * (width * 100);
    let wardrobe = Math.pow((side * 100), 2);
    let bench = area / 10;
    let freeSpace = area - wardrobe - bench;
    let dancers = freeSpace / (40 + 7000);
    console.log(`${Math.floor(dancers)}`);
}
danceHall([50, 25, 2]);