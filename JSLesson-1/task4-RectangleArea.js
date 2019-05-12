 /*jshint esversion: 6 */
 function rectangleArea(input) {
     let a = Number(input.shift());
     let b = Number(input.shift());
     let area = a * b;
     console.log(area);
 }
 rectangleArea(["2", "7"]);
 rectangleArea(["7", "8"]);
 rectangleArea([12, "5"]);