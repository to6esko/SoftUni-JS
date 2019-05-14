/*jshint esversion: 6 */
function charityCampaign(input) {
    let days = Number(input.shift());
    let chefs = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let panckake = Number(input.shift());

    let priceCakes = cakes * 45;
    let priceWaffles = waffles * 5.80;
    let pricePanckake = panckake * 3.20;
    let allPrice = (priceCakes + priceWaffles + pricePanckake) * chefs;
    let sumFromAll = allPrice * days;
    let allSum = sumFromAll - (1 / 8 * sumFromAll);
    console.log(`${allSum.toFixed(2)}`);
}
charityCampaign([20, 8, 14, 30, 16]);
charityCampaign([131, 5, 9, 33, 46]);