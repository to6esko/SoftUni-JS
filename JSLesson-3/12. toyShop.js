/*jshint esversion: 6 */
function toyShop(input) {
    let thrip = Number(input.shift());
    let puzzles = Number(input.shift());
    let dolls = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let thracks = Number(input.shift());

    let totalSum = 0;
    let toys = puzzles + dolls + bears + minions + thracks;
    let sum = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + thracks * 2;
    if (toys >= 50) {
        sum = sum - (sum * 0.25);
    }
    sum = sum - (sum * 0.1);
    totalSum = sum - thrip;
    if (sum >= thrip) {
        console.log(`Yes! ${Math.abs(totalSum).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(totalSum).toFixed(2)} lv needed.`);
    }
}

toyShop([40.8, 20, 25, 30, 50, 10]);
toyShop([320, 8, 2, 5, 5, 1]);