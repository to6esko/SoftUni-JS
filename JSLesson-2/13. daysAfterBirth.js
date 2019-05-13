/*jshint esversion: 6 */

function daysAfterBurthday([arg1]) {
    let data = Date.parse(arg1, "dd-MM-yyyy");
    let data2 = data.setData(999);
    console.log(data2.ToString("dd-MM-yyyy"));
    console.log(burthday.toLocaleDateString());
}
daysAfterBurthday([25 - 02 - 1995]);