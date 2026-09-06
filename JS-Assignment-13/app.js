// // 1.  Write a custom function power ( a, b ), to calculate the value of a raised to b. 
// function power (a, b) {
//     console.log(Math.pow(a, b));
// }
// power(2, 3);
// power(3, 4);

// // 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
// // Leap years ..., 2012, 2016, 2020, ... 

// var year = +prompt("Enter a year: ");
// function isLeapYear(year) {
//     // Check leap year conditions
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         alert(year + " is a leap year.");
//     }
//     else {
//         alert(year + " is not a leap year.");
//     }
// };
// isLeapYear(year);

// // 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
// // area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
// // Calculate area of triangle using 2 functions

// var a = +prompt("Enter the length of side a: ");
// var b = +prompt("Enter the length of side b: ");
// var c = +prompt("Enter the length of side c: ");

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var s = calculateS(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// var area = calculateArea(a, b, c);
// alert("The area of the triangle is: " + area);

// // 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.


// var subject1 = +prompt("Enter marks for subject 1: ");
// var subject2 = +prompt("Enter marks for subject 2: ");
// var subject3 = +prompt("Enter marks for subject 3: ");
// function calculateAverage(subject1, subject2, subject3) {
//     return  (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//     var total = subject1 + subject2 + subject3;
//     return (total / 300) * 100;
// }

// function mainFunction() {
//     var average = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(subject1, subject2, subject3);
//     alert("The average marks are: " + average);
//     alert("The percentage of marks are: " + percentage + "%");
// }

// mainFunction();

// // 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; // Return -1 if character is not found
// }
// console.log(customIndexOf("hello", "e"));

// // 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 
// function deleteVowels(sentence) {
// if (sentence.length > 25) {
//         return "Error: Sentence is too long! Max 25 characters allowed.";
// }
//     var vowels = "aeiouAEIOU";
//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {
//         if (vowels.indexOf(sentence[i]) === -1) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }
// console.log(deleteVowels("Hello, World!"));

// // 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var vowels = "aeiouAEIOU";
//     var count = 0;
//     for (var i = 0; i < str.length - 1; i++) {
//         var first = str[i];
//         var second = str[i + 1];
//         var pair = first + second;
//         var isFirstVowel = vowels.indexOf(first) !== -1;
//         var isSecondVowel = vowels.indexOf(second) !== -1;
//        switch (true) {
//             case (isFirstVowel && isSecondVowel):
//                 console.log("Found '" + pair + "' at index " + i);
//                 count++;
//                 break;
//             default:
//                 // not a vowel pair, do nothing
//                 break;
//         }
//     }

//     console.log("Total occurrences:", count);
// }

// findOccurrences();

// // 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 

// var distanceInKm = +prompt("Enter the distance between two cities in kilometers: ");

// function convertToMeters(km) {
//     console.log(km * 1000);
// }
// function convertToFeet(km) {
//     console.log(km * 3280.84);
// }
// function convertToInches(km) {
//     console.log(km * 39370.1);
// }
// function convertToCentimeters(km) {
//     console.log(km * 100000);
// }
// convertToMeters(distanceInKm);
// convertToFeet(distanceInKm);
// convertToInches(distanceInKm);
// convertToCentimeters(distanceInKm);


// // 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.  

// var hoursWorked = +prompt("Enter the number of hours worked: ");
// function calculateOvertimePay(hours) {
//     var overtimeRate = 12.00;
//     if (hours > 40) {
//         var overtimeHours = hours - 40;
//         var overtimePay = overtimeHours * overtimeRate;
//         console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));
//     } else {
//         console.log("No overtime pay. Worked hours are 40 or less.");
//     }
// }
// calculateOvertimePay(hoursWorked);

// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the  keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

var amount = +prompt("Enter the amount to be withdrawn (in hundreds): ");
function calculateCurrencyNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    var remainderAfterHundreds = amount % 100;
    var fifties = Math.floor(remainderAfterHundreds / 50);
    var remainderAfterFifties = remainderAfterHundreds % 50;
    var tens = Math.floor(remainderAfterFifties / 10);
    console.log("Currency notes of each denomination:");
    console.log("100: " + hundreds);
    console.log("50: " + fifties);
    console.log("10: " + tens);
    console.log(`You will receive ${hundreds} notes of 100, ${fifties} notes of 50, and ${tens} notes of 10.`);
}
calculateCurrencyNotes(amount);