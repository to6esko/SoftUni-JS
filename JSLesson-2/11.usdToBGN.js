/*jshint esversion: 6 */
function convertor([arg1]) {
    let usd = parseFloat(arg1);
    let convert = usd * 1.79549;
    console.log(`${convert.toFixed(2)} BGN`);
}

convertor([20]);
convertor([100]);
convertor([12.5]);