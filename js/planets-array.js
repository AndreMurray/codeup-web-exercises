
(function(){
    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];
//
//     /**
//      * TODO:
//      * Read each console log below, and write some javascript code to perform
//      * the step that it describes
//      */

//
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     console.log(planets);
console.log("Add The Sun to Array :", planets.unshift("The Sun"))
console.log(planets);

//
//     console.log('Adding "Pluto" to the end of the planets array.');
//     console.log(planets);
console.log("Add Pluto to the back to the Array:", planets.push("Pluto"));
console.log(planets);
//
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     console.log(planets);
    console.log("Removing The Sun from front of Array:", planets.shift());
    console.log(planets)
//
//     console.log('Removing "Pluto" from the end of the planets array.');
//     console.log(planets);
    console.log("removing Pluto fro the end of the array:", planets.pop());
    console.log(planets);
//
//     console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("Use indexOf to find the index of Earth:", planets.indexOf("Earth"));
//
//     console.log("Reversing the order of the planets array.");
//     console.log(planets);
    console.log("Reverse the order of the planets array:", planets.reverse());
    console.log(planets);
//
//     console.log("Sorting the planets array.");
//     console.log(planets);
    console.log("Sort the reversing array:", planets.sort())
    console.log(planets)
})();