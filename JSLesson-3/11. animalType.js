/*jshint esversion: 6 */
function animalType(input) {
    let type = input.shift();

    switch (type) {
        case "dog":
            console.log("mammal");
            break;
        case "snake":
        case "crocodile":
        case "tortoise":
            console.log("reptile");
            break;
        case "cat":
            console.log("unknown");
            break;
        default:
            break;
    }
}

animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);