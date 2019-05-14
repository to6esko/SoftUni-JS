/*jshint esversion: 6 */
function tailoringWorshop(input) {
    let tables = Number(input.shift());
    let lengthTables = Number(input.shift());
    let widthTables = Number(input.shift());

    let rectangleCover = tables * (lengthTables + 2 * 0.30) * (widthTables + 2 * 0.30);
    let squareCover = tables * (lengthTables / 2) * (lengthTables / 2);
    let priceUSD = rectangleCover * 7 + squareCover * 9;
    let priceBGN = priceUSD * 1.85;
    console.log(`${priceUSD.toFixed(2)} USD`);
    console.log(`${priceBGN.toFixed(2)} BGN`);
}
tailoringWorshop([5, 1.00, 0.50]);
tailoringWorshop([10, 1.20, 0.65]);