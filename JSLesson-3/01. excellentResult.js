/*jshint esversion: 6 */
function exellentResult(input) {
  let nuber = Number(input.shift());
  if (nuber >= 5.5) {
    console.log("Excellent!");
  }
}
exellentResult([6]);
exellentResult([5]);
exellentResult([5.5]);
exellentResult([5.49]);
