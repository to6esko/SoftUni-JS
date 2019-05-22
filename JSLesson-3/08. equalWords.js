/*jshint esversion: 6 */
function equalWords(input) {
    let word1 = input.shift();
    let word2 = input.shift();
    let str1 = word1.toLowerCase();
    let str2 = word2.toLowerCase();

    if (str1 == str2) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalWords(["Hello", "Hello"]);
equalWords(["SoftUni", "softuni"]);
equalWords(["Soft", "uni"]);
equalWords(["beer", "vodka"]);
equalWords(["HeLlo", "hELLo"]);