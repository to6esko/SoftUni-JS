/*jshint esversion: 6 */
function printInfo([firstName, lastName, age, town]) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

printInfo(["Todor", "Krastev", 49, "Varna"]);