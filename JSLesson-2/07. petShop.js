/*jshint esversion: 6 */
function petShop(input) {
    let dogs = Number(input.shift());
    let moreDogs = Number(input.shift());

    let foodPrice = dogs * 2.50 + moreDogs * 4;
    console.log(`${foodPrice.toFixed(2)} lv.`);
}
petShop([5, 4]);
petShop([13, 9]);