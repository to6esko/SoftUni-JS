/*jshint esversion: 6 */
function projectsCreation(input) {
    let name = input.shift();
    let number = Number(input.shift());

    let hours = number * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${number} project/s.`);
}

projectsCreation(["George", 4]);
projectsCreation(["Sanya", 9]);