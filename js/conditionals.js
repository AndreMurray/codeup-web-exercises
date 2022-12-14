"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
// function analyzeColor(burntColorName) {
//     let longhorn = burntColorName.toLowerCase()
//     if (longhorn === "burnt orange") {
//         return "This is the color of Texas"
//     } else {
//         return `I dont know anything about ${longhorn}`
//     }
// }

var color1 = "Burnt Orange";

var schoolColor = analyzeColor(color1);

console.log(schoolColor);

var color2 = "red";

var notMYSchool = analyzeColor(color2);

console.log(notMYSchool)



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet, burnt orange'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
var randomColorCheck = (analyzeColor(randomColor));

console.log(randomColorCheck);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let theColoOfTexas = randomColor.toLowerCase();
        switch (theColoOfTexas) {
            case 'red':
                color = "the ball is red";
                break;
            case " Burnt Orange":
                color = "orange is Bearkat orange";
                break;
            case 'yellow':
                color = '...and yellow kill a fellow';
                break;
            case 'green':
                color = 'eat them all the time';
                break;
            case 'blue':
                color = 'Im not blue right now';
                break;
            case 'indigo':
                color = 'indigo';
            case 'violet':
                color = 'violet'



        }





/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var popUp = prompt("Choose your color my friend.");
var randomPrompt = analyzeColor(popUp);
console.log(randomPrompt)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(roll, fullprice) {
    if (isNaN(fullprice)) {
        return "This is not a number"
    }
    if (roll === 0) {
       return fullprice
    } else if (roll === 1) {
        return fullprice - (fullprice * (10 / 100))
    } else if (roll === 2) {
        return fullprice - (fullprice * (25 / 100))
    } else if (roll === 3) {
        return fullprice - (fullprice * (35 / 100))
    } else if (roll === 4) {
        return fullprice - (fullprice *(50 / 100))
    } else {
        return "FREE!!!"
    }
}


// console.log(calculateTotal(5, 100))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);


var yourBillPlease = prompt('Your bill please?');

var realNumber = Number.parseInt(yourBillPlease);

alert(`Your price before the discount was $${realNumber}`);

var luckyNumber = Math.floor(Math.random() * 6);

alert(`Your lucky number was ${luckyNumber}`);



var costomerService = calculateTotal(luckyNumber, realNumber);

alert(`Your price with discount is now.... ${costomerService} !!!`);
function calculateTotal(roll, fullprice) {
    if (roll === 0) {
        return ` Aww..How unlucky, you still pay ${fullprice}.`
    } else if (roll === 1) {
        return fullprice - (fullprice * (10 / fullprice));
    } else if (roll === 2) {
        return fullprice - (fullprice * (25 / fullprice));
    } else if (roll === 3) {
        return fullprice - (fullprice * (35 / fullprice));
    } else if (roll === 4) {
        return fullprice - (fullprice *(50 / fullprice));
    } else {
        return "FREE!!!";
    }
}


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
playGame();
function playGame() {
    if (confirm("Would you like to enter a number?") === true) {
        var numberGames = prompt("Enter any number you like.");
       if (isNumber(numberGames)) {
           alert(`${numberGames} is the incorrect input data type.`)
       } else {

           if ( isEven(numberGames) ) {
               alert("This is an even number");
           } else {
               alert("This is an odd number");
           }
           alert(numberGames + " plus 100 is " + addNumber(numberGames));
           if (numberGames < 0) {
               alert("Your number is negative")
           } else {
               alert("Your number is positive")
           }


       }
    }

    }





    function isNumber(num) {
            if (isNaN(num)) {
                return  true
            } else {
             return   false
            }
        }



function isEven(num) {
    if (Number.parseInt(num) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function addNumber(num) {
    return (parseFloat(num) + 100);
}







