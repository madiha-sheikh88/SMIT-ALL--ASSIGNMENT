// // 1.  Write a program that takes a positive integer from user & 
// // display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the number

// let number = +prompt("Enter a positive integer:");
// document.write("Number: " + number + "<br>");
// console.log("Number: " + number);
// document.write("Round off value: " + Math.round(number) + "<br>");
// console.log("Round off value: " + Math.round(number));
// document.write("Floor value: " + Math.floor(number) + "<br>");
// console.log("Floor value: " + Math.floor(number));
// document.write("Ceil value: " + Math.ceil(number) + "<br>");
// console.log("Ceil value: " + Math.ceil(number));


// // 2. Write a program that takes a negative floating point 
// // number from user & display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the number 

// let number = +prompt("Enter a negative floating point number:");
// document.write("Number: " + number + "<br>");
// console.log("Number: " + number);
// document.write("Round off value: " + Math.round(number) + "<br>");
// console.log("Round off value: " + Math.round(number));
// document.write("Floor value: " + Math.floor(number) + "<br>");
// console.log("Floor value: " + Math.floor(number));
// document.write("Ceil value: " + Math.ceil(number) + "<br>");
// console.log("Ceil value: " + Math.ceil(number));


// // 3. Write a program that displays the absolute value of a number.E.g.absolute value of - 4 is 4 & absolute value of 5 is 5 

// let number = +prompt("Enter a number:");
// let absoluteValue = Math.abs(number);
// document.write(`The absolute value of ${number} is ${absoluteValue}<br>`);
// console.log("The absolute value of " + number + " is " + absoluteValue);


// // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`Random dice value: ${diceValue}`);
// console.log("Random dice value: " + diceValue);

// // 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

// let coinValue = Math.floor(Math.random() * 2) + 1;
// if (coinValue === 1) {
//     document.write("Random coin value: Heads");
//     console.log("Random coin value: Heads");
// } else {
//     document.write("Random coin value: Tails");
//     console.log("Random coin value: Tails");
// }


// // 6. Write a program that shows a random number between 1 and 100 in your browser.

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`Random number between 1 and 100: ${randomNumber}`);
// console.log("Random number between 1 and 100: " + randomNumber);


// // 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
// // a. 50 
// // b. 50kgs 
// // c. 50.2kgs 
// // d. 50.2kilograms

// let weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms)");
// let weight = parseFloat(weightInput);
// document.write(`The weight of user is ${weight} kilograms`);
// console.log("The weight of user is " + weight + " kilograms");

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Guess the secret number between 1 and 10:");

if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
    console.log("Congratulations! You guessed the secret number.");
} else {
    document.write(`Sorry, Try again.`);
    console.log(`Sorry, Try again.`);
}