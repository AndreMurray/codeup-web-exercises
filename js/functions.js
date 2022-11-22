"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello " + name + '!';
}
let trueName = sayHello('codeup');
console.log(trueName);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Andre");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Andre Murray";
console.log(sayHello(myName));

//Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
 var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
 function isTwo(num) {
     return num === 2
 }
 console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tipOfMeal, totalAmountOfMeal) {
    let conversionOfTip = tipOfMeal / 100; // 0.20, 0.25, 0.50
    let answer = conversionOfTip * totalAmountOfMeal; // 0.20 * 200
    return answer
}

//      let tipFormatted = ".0" + num1;
//      tipFormatted = parseFloat(tipFormatted)
//      let answer = tipFormatted * num2
//    return answer;
// }


console.log(calculateTip(20,20));
console.log(calculateTip(25, 25.50));
console.log(calculateTip(15, 33.42));



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// alert("Your bill is 20");
// let tip = prompt("What is the tip amount you want to give?");
// alert("We will calculate your tip");
// let payTip = alert(calculateTip(tip,20));
// console.log(payTip);

const userBill = prompt("What is the total to your bill?"); // returns string
const userTip = prompt("how much of a tip do you want to leave?") // returns a string
const coversionOfStringToNumber = parseInt(userBill);
const coversionOfStringToNumberForTip = parseInt(userTip);

const x = calculateTip(coversionOfStringToNumberForTip, coversionOfStringToNumber);
console.log(x);



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

 function applyDiscount(dis, price) {
    let anwer3 = (1 - dis) * price;
    return anwer3
}

let prac = applyDiscount(.2,100);

 let pos = applyDiscount(.7,100);

console.log(prac);


 console.log(pos);

