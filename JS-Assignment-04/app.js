var userInput = +prompt("Choose program 1, 2 or 3 which one you want to run? \n 1. Forward Counting \n 2. Backward Counting \n 3. Generate a Table");
var outputDiv = document.getElementById("display-result");
var resultText = "";
if (userInput === 1) {
    var fCountStart = +prompt("From where you want to start counting?");
    var fCountEnd = +prompt("Where you want to end counting?");
    resultText += "<h3>Forward Counting:</h3>"
    for (let i = fCountStart; i <= fCountEnd; i++) {
        resultText += `${i} <br>`;
    }
} else if (userInput === 2) {
    var bCountStart = +prompt("From where you want to start counting?");
    var bCountEnd = +prompt("Where you want to end counting?");
    resultText += "<h3>Backward Counting:</h3>"
    for (let i = bCountStart; i >= bCountEnd; i--)
        resultText += `${i} <br>`;
} else if (userInput === 3) {
    var tableNum = +prompt("Enter Table number that you want to display..");
    var tableStart = +prompt("Enter start number of the table");
    var tableEnd = +prompt("Enter end number of the table");
    resultText += "<h3>Table:</h3>"
    for (let i = tableStart; i <= tableEnd; i++)
        resultText += `<br>${tableNum} x ${i} = ${tableNum * i} <br>`
} else {
    resultText = "<h3>Oops! Invalid choice.</h3><p>Please refresh and choose 1, 2, or 3.</p>";
}

outputDiv.innerHTML = resultText;