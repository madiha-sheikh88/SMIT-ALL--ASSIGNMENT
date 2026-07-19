// // 1.  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your Last name");
// var fullName = `${firstName} ${lastName}`;
// alert(`Hello, ${fullName}`);



// // 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser


// var favPhone = prompt("Enter your favorite mobile phone model");
// document.write("My favorite phone is: " + favPhone + "<br>");
// document.write("Length of string: " + favPhone.length + "<br>");



// // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var findIndex = "Pakistani";
// var indexOfN = findIndex.indexOf("n");
// document.write("String: " + findIndex + "<br>");
// document.write("Index of 'n': " + indexOfN + "<br>");




// // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

// var findIndex = "Hello World";
// var lastIndexOfL = findIndex.indexOf("l");
// document.write("String: " + findIndex + "<br>");
// document.write("Last Index of 'l': " + lastIndexOfL + "<br>");



// // 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 


// var findChar = "Pakistani";
// var thirdIndex = findChar.charAt(3);
// document.write("String: " + findChar + "<br>");
// document.write("Character at 3rd index: " + thirdIndex + "<br>");



// // 6. Repeat Q1 using string concat() method. 


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your Last name");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName);



// // 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 


// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write(`City: ${city} <br>`);
// document.write(`After Replacement: ${newCity} <br>`);



// // 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g , "&");
// document.write(`Message: ${message} <br>`);
// document.write(`After Replacement: ${newMessage} <br>`);




// // 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 


// var str = "472";
// var typeStr = typeof (str);
// var num = Number(str);
// var typeNum = typeof (num);
// document.write(`Value: ${str} <br>`);
// document.write(`Type: ${typeStr} <br>`);
// document.write(`Value: ${num} <br>`);
// document.write(`Type: ${typeNum}`);



// // 10. Write a program that takes user input. Convert and show the input in capital letters. 


// var userInput = prompt ("Enter your name");
// var capitalLetter = userInput.toUpperCase();
// document.write(`User Input: ${userInput} <br>`);
// document.write(`Upper Case: ${capitalLetter} <br>`);



// // 11. Write a program that takes user input. Convert and show the input in title case.


// var userInput = prompt ("Enter any word...");
// var fisrtLetter =  userInput.charAt(0).toUpperCase();
// var otherLetters = userInput.slice(1).toLowerCase();
// var titleCase = fisrtLetter + otherLetters;
// document.write(`User Input: ${userInput} <br>`);
// document.write(`Title Case: ${titleCase} <br>`);



// // 12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser.


// var num = 35.36
// var str =num.toString().replace(".","");
// document.write(`Number: ${num} <br>`);
// document.write(`Result: ${str} <br>`);



// // 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64 


// var userInput = prompt("Enter your name with special symbols..");
// isValid = false;
// for (var i = 0; i < userInput.length; i++) {
//    if (userInput.charCodeAt(i) == 33 || userInput.charCodeAt(i) == 44 || userInput.charCodeAt(i) == 46 || userInput.charCodeAt(i) == 64) {
//       isValid = true;
//       break;
//    }
// }
// if (isValid) {
//     alert("Please enter a valid User Name");
// }
// else {
//     alert("User Name is valid");
// }


// // 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 


// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to My Bakery. What do you want to order?");
// var isavailable = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         isavailable = true;
//         break;
//     }
// }
// if (isavailable) {
//     alert(`${userInput} is available.`);
// } else {
//     alert(`${userInput} is not available.`);
// }


// // 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 


// var userInput = prompt("Enter a password..");

// var hasAlphabet = false;
// var hasNumber = false;
// var hasInvalidChar = false;

// // Requirement c
// if (userInput.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } 
// // Requirement
// else if (userInput.charCodeAt(0) >= 48 && userInput.charCodeAt(0) <= 57) {
//     alert("Password can not begin with a number.");
// } 
// else {
//     // Requirement a
//     for (var i = 0; i < userInput.length; i++) {
//         var code = userInput.charCodeAt(i);

//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//             hasAlphabet = true;
//         } else if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         } else {
//             hasInvalidChar = true; // Found a space or special character
//         }
//     }

//     // Validate if it has both alphabets and numbers, and no invalid symbols
//     if (hasAlphabet && hasNumber && !hasInvalidChar) {
//         alert("Password is valid!");
//     } else {
//         alert("Please enter a valid password. It must contain both alphabets and numbers.");
//     }
// }




// // 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser. 

//  var university = "University of Karachi";
// var universityArray = university.split("").join("<br>");
// document.write(universityArray);




// // 17. Write a program to display the last character of a user input. 


// var userInput = prompt("Enter any word..");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write(`User Input: ${userInput} <br>`);
// document.write(`Last Character of input: ${lastChar} <br>`);



// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";
var count = str.toLowerCase().split(wordToCount).length - 1;
document.write(`Text: ${str} <br>`);
document.write(`There are ${count} occurrences of word "${wordToCount}"`);







