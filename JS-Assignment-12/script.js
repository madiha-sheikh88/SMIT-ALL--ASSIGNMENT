// // 1. Write a function that displays current date & time in your browser.

//     var now = new Date();
//     console.log(now);

// // 2. Write a function that takes first & last name and then it greets the user using his full name.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + "!");
// }
// greetUser(firstName, lastName);

// // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNumbers(num1, num2));

// // 4. Calculator:  
// // Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     return result;
// }

// var number1 = parseFloat(prompt("Enter first number:"));
// var number2 = parseFloat(prompt("Enter second number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// var calculationResult = calculator(number1, number2, operator);
// console.log("Result: " + calculationResult);


// // 5. Write a function that squares its argument.
// var number = +(prompt("Enter a number to square:"));
// function squareNumber(num) {
//     return num * num;
// }
// console.log(squareNumber(number));


// // 6. Write a function that computes factorial of a number.
// var number = parseInt(prompt("Enter a number to compute its factorial:"));
// function factorial(num) {
//     if (num < 0) {
//         return "Factorial is not defined for negative numbers.";
//     } else if (num === 0 || num === 1) {
//         return 1;
//     }  else {
//         var result = 1;
//         for (var i = 2; i <= num; i++) {
//             result *= i;
//         }
//         return result;
// }
// }
// console.log(factorial(number));

// // 7. Write a function that take start and end number as inputs & display counting in your browser.
// var startNum = parseInt(prompt("Enter the start number:"));
// var endNum = parseInt(prompt("Enter the end number:"));
// function displayCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }
// displayCounting(startNum, endNum);

// // 8. Write a nested function that computes hypotenuse of a right angle triangle.  
// // Hypotenuse2 = Base2 + Perpendicular2
// // Take base and perpendicular as inputs. 
// // Outer function : calculateHypotenuse() 
// // Inner function: calculateSquare()

// var base = parseFloat(prompt("Enter the base of the triangle:"));
// var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hypotenuse;
// }
// console.log("Hypotenuse: " + calculateHypotenuse(base, perpendicular));


// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables


// var width = parseFloat(prompt("Enter the width of the rectangle:"));
// var height = parseFloat(prompt("Enter the height of the rectangle:"));
// function calculateArea(width, height) {
//     return width * height;
// }
// console.log("Area of rectangle (using values): " + calculateArea(5, 10));
// console.log("Area of rectangle (using variables): " + calculateArea(width, height));

// // 10. Write a JavaScript function that checks whether a passed string is palindrome or not?a palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
// var str = prompt("Enter a string to check if it's a palindrome:");
// function isPalindrome(str) {
//     var reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log("Is palindrome: " + isPalindrome(str));

// // 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
// // EXAMPLE STRING : 'the quick brown fox'  
// // EXPECTED OUTPUT : 'The Quick Brown Fox'
// var inputString = prompt("Enter a string to capitalize the first letter of each word:");
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }
// console.log("Capitalized string: " + capitalizeFirstLetter(inputString));


// // 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// // EXAMPLE STRING : 'Web Development Tutorial'  
// // EXPECTED OUTPUT : 'Development'
// var inputString = prompt("Enter a string to find the longest word:");
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log("Longest word: " + findLongestWord(inputString));

// // 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'

// var inputString = prompt("Enter a string:");
// var letterToCount = prompt("Enter a letter to count its occurrences:");
// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("Number of occurrences: " + countLetterOccurrences(inputString, letterToCount));

// 14. The Geometrizer : Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
// Circumference of circle    =     2πr 
// Area of circle       =     πr2

var radius = parseFloat(prompt("Enter the radius of the circle:"));
var circumference = calcCircumference(radius);
var area = calcArea(radius);
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}
