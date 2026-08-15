// const form = document.getElementById("registration-form");
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let isFormValid = true;

//     const submitBtn = document.querySelector(".btn.btn-primary");

//     const countryName = document.querySelector("#country").value;
//     const classPreference = document.querySelector("#class-preference").value;
//     const selectGender = document.querySelector("#select-gender").value;
//     const selectCity = document.querySelector("#select-city").value;
//     const selectCourse = document.querySelector("#select-course").value;
//     const selectCampus = document.querySelector("#select-campus").value;
//     const computerProficiency = document.querySelector("#computer-proficiency").value;
//     const lastQualification = document.querySelector("#last-qualification").value;
//     const hearAboutUs = document.querySelector("#hear-about-us").value;

//     const fullName= document.getElementById("full-name");
//     const fatherName= document.getElementById("Father-name");
//     const dob= document.getElementById("dob");
//     const email= document.getElementById("email");
//     const phone= document.getElementById("phone-number");
//     const fatherPhone= document.getElementById("Fphone-number");
//     const idNo= document.getElementById("ID-No");
//     const fatherIdNo= document.getElementById("FID-No");
//     const address= document.getElementById("address");


//     const laptopRadio = document.querySelector('input[name="havlaptop"]');
//     const pictureInput = document.getElementById("picture-upload");
//     const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
//     const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];
//     const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');

//     if (countryName === "") {
//         alert("Please select a country");
//         document.getElementById('country').focus();
//         document.getElementById('country').style.backgroundColor = "yellow";
//         isFormValid = false;
//     } else if (classPreference === "") {
//         alert("Please select class preference");
//         document.getElementById('class-preference').style.backgroundColor = "yellow";
//         document.getElementById('class-preference').focus();
//         isFormValid = false;
//     } else if (selectGender === "") {
//         alert("Please select gender");
//         document.getElementById('select-gender').style.backgroundColor = "yellow";
//         document.getElementById('select-gender').focus();
//         isFormValid = false;
//     } else if (selectCity === "") {
//         alert("Please select a city");
//         document.getElementById('select-city').style.backgroundColor = "yellow";
//         document.getElementById('select-city').focus();
//         isFormValid = false;
//     } else if (selectCourse === "") {
//         alert("Please select a course.");
//         document.getElementById('select-course').focus();
//         document.getElementById('select-course').style.backgroundColor = "yellow";
//         isFormValid = false;

//     } else if (computerProficiency === "") {
//         alert("Please select a course.");
//         document.getElementById('computer-proficiency').focus();
//         document.getElementById('computer-proficiency').style.backgroundColor = "yellow";
//         isFormValid = false;
//     } else if (lastQualification === "") {
//         alert("Please select a course.");
//         document.getElementById('last-qualification').focus();
//         document.getElementById('last-qualification').style.backgroundColor = "yellow";
//         isFormValid = false;
//     } else if (hearAboutUs === "") {
//         alert("Please select a course.");
//         document.getElementById('hear-about-us').focus();
//         document.getElementById('hear-about-us').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }

// let isFormValid = true;
//     if (fullName === "") {
//         alert("Please enter your name.");
//          document.getElementById('full-name').focus();
//         document.getElementById('full-name').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }

//     // Validate Father's Name
//     else if (fatherName === "") {
//         alert("Please enter your father's name.");
//         document.getElementById('Father-name').focus();
//         document.getElementById('Father-name').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }
//      // Validate DATE OF BIRTH
//         else if (dob === "") {
//         alert("Please enter a valid age.");
//         document.getElementById('dob').focus();
//         document.getElementById('dob').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }
//     // Validate Email (Must match standard email layout)
//     else if (!email.includes('@') || !email.endsWith('.com')) {
//         alert("Please enter a valid email address.");
//         document.getElementById('email').focus();
//         document.getElementById('email').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }
//     // Validate Phone number (Must be a number and 13 digits)
//     else if (phone === "" || isNaN(phone) || phone.toString().length !== 11){
//         alert("Please enter a valid phone number (11 digits)."); 
//         document.getElementById('phone-number').focus();
//         document.getElementById('phone-number').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }
//             // Validate F Phone number (Must be a number and 13 digits)
//      else if (fatherPhone === "" || isNaN(fatherPhone) || fatherPhone.toString().length !== 11){
//         alert("Please enter a valid phone number (11 digits)."); 
//         document.getElementById('Fphone-number').focus();
//         document.getElementById('Fphone-number').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }
//         // Validate CNIC (Must be a number and 13 digits)
//     else if (idNo === "" || isNaN(idNo) || idNo.toString().length !== 13) {
//         alert("Please enter a valid CNIC number (13 digits)."); 
//         document.getElementById('ID-No').focus();
//         document.getElementById('ID-No').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }

//         // Validate CNIC (Must be a number and 13 digits)
//     else if (fatherIdNo === "" || isNaN(fatherIdNo) || fatherIdNo.toString().length !== 13) {
//         alert("Please enter a valid CNIC number (13 digits)."); 
//         document.getElementById('FID-No').focus();
//         document.getElementById('FID-No').style.backgroundColor = "yellow";
//         isFormValid = false;
//     }
//     else if (address === "") {
//         alert("Please write address");
//         document.getElementById('address').style.backgroundColor = "yellow";
//         document.getElementById('address').focus();
//         isFormValid = false;


//     function validateSingleRadio() {
//     // Check the boolean state
//     if (!laptopRadio.checked) {
//     // This code runs only if the button is NOT checked
//     alert("Validation failed: The button is not checked.");
// }
//     }

//   function validatePicture() {
//     const wrapper = document.querySelector(".border-pic");
//     clearGroupError("picture");
//     if (!pictureInput.files || pictureInput.files.length === 0) {
//       showGroupError(wrapper, "picture", "Please upload your picture.");
//       return false;
//     }
//     const file = pictureInput.files[0];
//     if (!ALLOWED_TYPES.includes(file.type)) {
//       showGroupError(wrapper, "picture", "File must be jpg, jpeg, or png.");
//       return false;
//     }
//     if (file.size > MAX_FILE_SIZE) {
//       showGroupError(wrapper, "picture", "File size must be less than 1MB.");
//       return false;
//     }
//     return true;
//   }


// function validateCheckBoxes(){
//     if (!checkboxes.checked){
//         alert(Please check all check boxes!);
//     }
// }

// });


const form = document.getElementById("registration-form");
 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isFormValid = true;
 
    // Small helper so we don't repeat the same 3 lines for every field
    function showError(el, message) {
        alert(message);
        el.focus();
        el.style.backgroundColor = "yellow";
        isFormValid = false;
    }
 
    const submitBtn = document.querySelector(".btn.btn-primary");
 
    // Dropdowns
    const country = document.getElementById("country");
    const classPreference = document.getElementById("class-preference");
    const selectGender = document.getElementById("select-gender");
    const selectCity = document.getElementById("select-city");
    const selectCourse = document.getElementById("select-course");
    const selectCampus = document.getElementById("select-campus");
    const computerProficiency = document.getElementById("computer-proficiency");
    const lastQualification = document.getElementById("last-qualification");
    const hearAboutUs = document.getElementById("hear-about-us");
 
    // Text fields
    const fullName = document.getElementById("full-name");
    const fatherName = document.getElementById("Father-name");
    const dob = document.getElementById("dob");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone-number");
    const fatherPhone = document.getElementById("Fphone-number");
    const idNo = document.getElementById("ID-No");
    const fatherIdNo = document.getElementById("FID-No");
    const address = document.getElementById("address");
 
    // Radios / file / checkboxes
    const laptopRadios = document.querySelectorAll('input[name="havlaptop"]');
    const pictureInput = document.getElementById("picture-upload");
    const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
    const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];
    const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
 
    // ---------------- Dropdown validations ----------------
    if (country.value === "") {
        showError(country, "Please select a country.");
    } else if (classPreference.value === "") {
        showError(classPreference, "Please select class preference.");
    } else if (selectGender.value === "") {
        showError(selectGender, "Please select gender.");
    } else if (selectCity.value === "") {
        showError(selectCity, "Please select a city.");
    } else if (selectCourse.value === "") {
        showError(selectCourse, "Please select a course.");
    } else if (selectCampus.value === "") {
        showError(selectCampus, "Please select a campus.");
    } else if (computerProficiency.value === "") {
        showError(computerProficiency, "Please select your computer proficiency.");
    } else if (lastQualification.value === "") {
        showError(lastQualification, "Please select your last qualification.");
    } else if (hearAboutUs.value === "") {
        showError(hearAboutUs, "Please tell us how you heard about us.");
    }
 
    // ---------------- Text field validations ----------------
    if (fullName.value.trim() === "") {
        showError(fullName, "Please enter your name.");
    } else if (fatherName.value.trim() === "") {
        showError(fatherName, "Please enter your father's name.");
    } else if (dob.value === "") {
        showError(dob, "Please enter your date of birth.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
    } else if (phone.value === "" || isNaN(phone.value) || phone.value.length !== 11) {
        showError(phone, "Please enter a valid phone number (11 digits).");
    } else if (fatherPhone.value === "" || isNaN(fatherPhone.value) || fatherPhone.value.length !== 11) {
        showError(fatherPhone, "Please enter a valid father's phone number (11 digits).");
    } else if (idNo.value === "" || isNaN(idNo.value) || idNo.value.length !== 13) {
        showError(idNo, "Please enter a valid CNIC number (13 digits).");
    } else if (fatherIdNo.value === "" || isNaN(fatherIdNo.value) || fatherIdNo.value.length !== 13) {
        showError(fatherIdNo, "Please enter a valid father's CNIC number (13 digits).");
    } else if (address.value.trim() === "") {
        showError(address, "Please write your address.");
    }
 
    // ---------------- Laptop radio validation ----------------
    const laptopChecked = Array.from(laptopRadios).some(radio => radio.checked);
    if (!laptopChecked) {
        alert("Please select whether you have a laptop.");
        isFormValid = false;
    }
 
    // ---------------- Picture validation ----------------
    function validatePicture() {
        if (!pictureInput.files || pictureInput.files.length === 0) {
            alert("Please upload your picture.");
            return false;
        }
        const file = pictureInput.files[0];
        if (!ALLOWED_TYPES.includes(file.type)) {
            alert("Picture must be jpg, jpeg, or png.");
            return false;
        }
        if (file.size > MAX_FILE_SIZE) {
            alert("Picture size must be less than 1MB.");
            return false;
        }
        return true;
    }
    if (!validatePicture()) {
        isFormValid = false;
    }
 
    // ---------------- Checkbox validation ----------------
    const allChecked = checkboxes.length > 0 && Array.from(checkboxes).every(cb => cb.checked);
    if (!allChecked) {
        alert("Please check all the checkboxes.");
        isFormValid = false;
    }
 
    // ---------------- Final step ----------------
    if (isFormValid) {
        alert(Your form is submitted successfully!)
        form.submit();
    }
});