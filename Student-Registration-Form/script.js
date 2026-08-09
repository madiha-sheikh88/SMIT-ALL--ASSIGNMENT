let form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
     event.preventDefault();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const cnic = document.getElementById('cnic').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

let isFormValid = true;
    if (name === "") {
        alert("Please enter your name.");
         document.getElementById('name').focus();
        document.getElementById('name').style.backgroundColor = "yellow";
        isFormValid = false;
    }

    // Validate Father's Name
    else if (fatherName === "") {
        alert("Please enter your father's name.");
        document.getElementById('fatherName').focus();
        document.getElementById('fatherName').style.backgroundColor = "yellow";
        isFormValid = false;
    }

        // Validate CNIC (Must be a number and 13 digits)
    else if (cnic === "" || isNaN(cnic) || cnic.toString().length !== 13) {
        alert("Please enter a valid CNIC number (13 digits)."); 
        document.getElementById('cnic').focus();
        document.getElementById('cnic').style.backgroundColor = "yellow";
        isFormValid = false;
    }

    // Validate Age (Must be a number
    else if (age === "" || isNaN(age) || age < 15 || age > 35) {
        alert("Please enter a valid age.");
        document.getElementById('age').focus();
        document.getElementById('age').style.backgroundColor = "yellow";
        isFormValid = false;
    }

    // Validate Email (Must match standard email layout)
    else if (!email.includes('@') || !email.endsWith('.com')) {
        alert("Please enter a valid email address.");
        document.getElementById('email').focus();
        document.getElementById('email').style.backgroundColor = "yellow";
        isFormValid = false;
    }

    // Validate Course Select
    else if (course === "") {
        alert("Please select a course.");
        document.getElementById('course').focus();
        document.getElementById('course').style.backgroundColor = "yellow";
        isFormValid = false;
    }

    // Final check: If all rules passed, proceed with form actions
    if (isFormValid) {
        document.getElementById('display-name').innerText = name;
        document.getElementById('display-fatherName').innerText = fatherName;
        document.getElementById('display-cnic').innerText = cnic;
        document.getElementById('display-age').innerText = age;
        document.getElementById('display-email').innerText = email;
        document.getElementById('display-course').innerText = course;
        document.getElementById('display-date').innerText = new Date().toLocaleDateString();
        document.getElementById('data-display-container').style.display = 'block';
        alert("Form is valid! Submitting your data...");
        form.reset();
    }
});