/*jshint esversion: 6 */
function alcoholMarket(input) {
    let priceWhiskey = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let brandyLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());


    let priceBrandy = priceWhiskey / 2;
    let priceWine = priceBrandy - (0.4 * priceBrandy);
    let priceBeer = priceBrandy - (0.8 * priceBrandy);
    let sumBrandy = brandyLiters * priceBrandy;
    let sumWine = wineLiters * priceWine;
    let sumBeer = beerLiters * priceBeer;
    let sumWhiskey = whiskeyLiters * priceWhiskey;
    let allSum = sumBrandy + sumWine + sumBeer + sumWhiskey;
    console.log(`${allSum.toFixed(2)}`);
}
alcoholMarket([50, 10, 3.5, 6.5, 1]);
alcoholMarket([63.44, 3.57, 6.35, 8.15, 2.5]);