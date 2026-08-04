// // 1. Create a signup form and display form data in your web page on submission.

//     const form = document.getElementById('signup-form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         // Display form data on the web page
//         const resultDiv = document.createElement('div');
//         resultDiv.innerHTML = `<h2>Form Data:</h2>
//                                <p><strong>Name:</strong> ${name}</p>
//                                <p><strong>Email:</strong> ${email}</p>
//                                <p><strong>Password:</strong> ${password}</p>`;
//         document.body.appendChild(resultDiv);
//     });

// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 

var readMoreBtn = document.getElementById('read-more');
var fullDetails = document.getElementById('full-details');

readMoreBtn.addEventListener('click', function() {
    fullDetails.style.display = 'block';
});