/*jshint esversion: 6 */
function yardGreening(input) {
    let area = Number(input.shift());

    let price = area * 7.61;
    let discount = price * 0.18;
    let sum = price - discount;
    console.log(`The final price is: ${sum.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening([540]);
yardGreening([135]);