//let yourName = prompt("What is your name");

//let message = myFunction(yourName);
//console.log(message);

let beef = fight("Billy","Bob");

//console.log(beef)

let y = isEven(465363737);
let x = isEven(6);

console.log(y);
console.log(x);





















function myFunction(name) {
    return "Thank you, " + name + ". You have ran my function" ;
}

function fight(person1, person2,) {
    console.log(person1 + ' punched ' + person2 + ' right in the kisser.')
}

function isEven(num) {
    let number = num;
    let answer = (number % 2 === 0);
    return answer
}