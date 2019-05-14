/*jshint esversion: 6 */
function usdToBgn(input) {
    let usd = Number(input.shift());
    let bgn = usd * 1.79549;
    console.log(`${bgn.toFixed(2)}`);
}

usdToBgn([20]);
usdToBgn([100]);
usdToBgn([12.5]);