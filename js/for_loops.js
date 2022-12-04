"use strict"
// Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
//     Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
// function showMultiplicationTable(num) {

//     for (let i = 1 ; i < 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`)
//     }
//
// }
// let MultiQuest = showMultiplicationTable(7);
// console.log(MultiQuest)

//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// for (let i = 0; i < 10; i++) {
//     let realMath = Math.floor(Math.random()*(200 - 20 + 1) + 20);
//     if(realMath % 2 === 0) {
//         console.log(`${realMath} is even`)
//     } else {
//         console.log(`${realMath} is odd`)
//     }
// }
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
// Create a for loop that uses console.log to create the output shown below.
// for(let i = 0; i <= 9; i++) {
//     let answer = String(i).repeat(i);
//     console.log(answer)
// }
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Create a for loop that uses console.log to create the output shown below.
// for (let i = 100; i > 0; i--) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
// Break and Continue
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
// let oddNum = prompt("Pick a number between 1 and 50.");
// oddNum = parseInt(oddNum)
//
//     for (let i = 1; i <= 50; i+=2) {
//         if (typeof oddNum !== "number" || isNaN(oddNum)) {
//             alert(`enter the correct data type`)
//             break;
//         } else if ( typeof oddNum === "number" && oddNum === i && i % 2 === 1) {
//             console.log(`Not the number we want: ${i}`)
//             continue;
//         } else {
//             console.log(`Here is an odd number ${i}`)
//
//         }
//     }


//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49
// While Loops
// Create a file named while.js in the js directory.
//
//     Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
//     1. Finally, commit the changes to your git repository, and push to GitHub.
function getRandomNum(num1, num2) {
   return  Math.floor(Math.random()*(num2 - num1 + 1) + num1)
}

let conesToSell = getRandomNum(50, 100);
do{
    let conesToBuy = getRandomNum(1,5);
    if (conesToBuy <= conesToSell) {
        console.log(`${conesToBuy} cones sold...`);
        conesToSell -= conesToBuy;
    } else {
        console.log(`cannot sell you ${conesToBuy} cones, I have only ${conesToSell}...`);
        console.log(`${conesToSell} conses sold...`);
        conesToSell -= conesToSell;
        console.log(`Yay! I have sold them all!`)
    }
} while (conesToSell > 0)


/*Make sure you put in your random function to run code for ice cream problem function getRandomNum(min, max){
return Math.floor(Math.random() * (max - min + 1) + min)
 */