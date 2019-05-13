/*jshint esversion: 6 */
function currencyConverter([arg1, arg2, arg3]) {
    let money = parseFloat(arg1);
    let contryIn = String(arg2);
    let contryOut = String(arg3);

    let sum = 0;
    let bgn = 1.0;
    let usd = 1.79549;
    let eur = 1.95583;
    let gbp = 2.53405;

    switch (contryIn) {
        case "BGN":
            break;
        case "USD":
            money = money * usd;
            break;
        case "EUR":
            money = money * eur;
            break;
        case "GBP":
            money = money * gbp;
            break;
        default:
            break;
    }
    switch (contryOut) {
        case "BGN":
            money = money / bgn;
            break;
        case "USD":
            money = money / usd;
            break;
        case "EUR":
            money = money / eur;
            break;
        case "GBP":
            money = money / gbp;
            break;
        default:
            break;

    }
    console.log(`${money.toFixed(2)} ${contryOut}`);
}



currencyConverter([20, "USD", "BGN"]);
currencyConverter([100, "BGN", "EUR"]);
currencyConverter([12.35, "EUR", "GBP"]);
currencyConverter([150.35, "USD", "EUR"]);