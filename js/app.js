/* Code for the slider adjusting the number of pain the patient is feeling */
let slider = document.getElementById("health")
let output = document.getElementById("healthValue")
output.innerHTML = slider.value;
slider.oninput = function () {output.innerHTML = this.value;};

/* Get the current date */
const today = new Date();

/* Formatting the date */
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

/* Displaying the date */
document.getElementById('date').textContent = formattedDate;


/* First Name Validation */
function validateFirstName() {
  let fname = document.getElementById("firstName").value.trim();
  const namePattern = /^[A-Za-z'-]+$/;

  if (fname === "") {
    document.getElementById("firstName-error").innerHTML = "First name field cannot be empty";
    return false;
  }  else if (fname !== "") {
    if (!fname.match(namePattern)) {
      document.getElementById("firstName-error").innerHTML = "First name can only have letters, apostrophes, and dashes only";
      return false;
    } else if (fname.length < 2) {
      document.getElementById("firstName-error").innerHTML = "First name must have at least 2 characters";
      return false;
    } else if (fname.length > 30) {
      document.getElementById("firstName-error").innerHTML = "First name cannot be more than 30 characters";
      return false;
    } else {
      document.getElementById("firstName-error").innerHTML = "";
      return true;
    }
  }
}

/* Middle Name Validation */
function validateMiddleInitial() {
  let middleInitial = document.getElementById("middleInitial").value;
  const namePattern = /^[A-Z]+$/;

  middleInitial = middleInitial.toUpperCase();
  document.getElementById("middleInitial-error").value = middleInitial

  if (!middleInitial.match(namePattern)) {
    document.getElementById("middleInitial-error").innerHTML = "Middle initial must be a single upper case letter";
    return false;
  } else {
      document.getElementById("middleInitial-error").innerHTML = "";
      return true;
    }
  }

/* Last Name Validation */
function validateLastName() {
  let lname = document.getElementById("lastName").value.trim();
  const namePattern = /^[A-Za-z'-]+$/;

  if (lname === "") {
    document.getElementById("lastName-error").innerHTML = "Last name field cannot be empty";
    return false;
  }  else if (lname !== "") {
    if (!lname.match(namePattern)) {
      document.getElementById("lastName-error").innerHTML = "Last name can only have letters, apostrophes, and dashes only";
      return false;
    } else if (lname.length < 2) {
      document.getElementById("lastName-error").innerHTML = "Last name must have at least 2 characters";
      return false;
    } else if (lname.length > 30) {
      document.getElementById("lastName-error").innerHTML = "Last name cannot be more than 30 characters";
      return false;
    } else {
      document.getElementById("lastName-error").innerHTML = "";
      return true;
    }
  }
}


/* Validates DOB */
function validateDob() {
  let dateOfBirth = document.getElementById("dateOfBirth");
  let date = new Date(dateOfBirth.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

  if (date > new Date()) {
    document.getElementById("dob-error").innerHTML =
      "Date cannot be in the future";
    dateOfBirth.value = "";
    return false;
  } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML =
      "Date cannot be more than 120 years ago";
    dateOfBirth.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

/* Validates SSN */
function validateSSN() {
  const ssn = document.getElementById("ssn").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML = "Please enter valid social security number";
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
  }
}

/* Validates address */
function validateAddress() {
  let address1 = document.getElementById("address").value;

  if (address1.length < 2) {
    document.getElementById("address-error").innerHTML = "Please enter your address"
    return false;
  } else {
    document.getElementById("address-error").innerHTML = "";
    return true;
  }
}

/* Validates city */
function validateCity() {
  let city1 = document.getElementById("city").value;

  if (city1.length < 2) {
    document.getElementById("city-error").innerHTML = "Please enter your city"
    return false;
  } else {
    document.getElementById("city-error").innerHTML = "";
    return true;
  }
}


/* Validates zipcode */
function validateZip() {
  const zipInput =document.getElementById("zip");
  let zip = zipInput.value.replace(/[^\d-]/g, "")

  if (!zip) {
    document.getElementById("zip-error").innerHTML = "Please enter your zip code"
    return false;
  }

  /* Removes digits after 5 */
  if (zip.length > 5) {
    zip = zip.slice(0,5);
  }

  zipInput.value = zip
  document.getElementById("zip-error").innerHTML = "";
  return true;
}

/* Validates email */
function validateEmail() {
  let email = document.getElementById("email").value;
  let emailR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "") {
    document.getElementById("email-error").innerHTML = "Please enter your email address";
    return false;
    }
      else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address"
        return false;
  }
      else {
        document.getElementById("email-error").innerHTML = "";
        return true;
  }
}

function validatePhone() {
  const phoneInput = document.getElementById("phoneNumber");
  const phone = phoneInput.value.replace(/\D/g, "");

  if (phone.length !== 10) {
    document.getElementById("phoneNumber-error").innerHTML = "Please enter your phone number";
    return false;
  }

  phoneInput.value = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
  document.getElementById("phoneNumber-error").innerHTML = "";
  return true;
}

  /* Validates User ID */
  function validateUserID() {
    let userID = document.getElementById("userID").value;

    /* Converts to lowercase */
    userID = userID.toLowerCase();

    /* Displays in lowercase */
    document.getElementById("userID").value = userID;

    if (userID.length === 0) {
      document.getElementById("userID-error").innerHTML =
        "User ID cannot be empty";
      return false;
    }

    /* Checks User ID for starting with a number */
    if (!isNaN(userID.charAt(0))) {
      document.getElementById("userID-error").innerHTML =
        "User ID cannot start with a number";
      return false;
    }

    /* Checks User ID for only containing letters, numbers, or underscores */
    let regex = /^[a-zA-Z0-9_]+$/;

    if (!regex.test(userID)) {
      document.getElementById("userID-error").innerHTML =
        "User ID can only contain letters, numbers, or underscores";
    } else if (userID.length < 5) {
      document.getElementById("userID-error").innerHTML =
        "User ID must be at least 5 characters"
    } else if (userID.length > 30) {
      document.getElementById("userID-error").innerHTML =
        "User ID cannot be more than 30 characters"
    } else {
      document.getElementById("userID-error").innerHTML = ""
    }
  }

  /* Validates Password */
  function validatePassword() {
    const password = document.getElementById("password").value;
    const user = document.getElementById("userID").value;
    let flagError = 0;

    /* Checking for lowercase letters */
    if (!password.match(/[a-z]/)) {
      document.getElementById("message1").innerHTML =
        "Password must have at least 1 lowercase letter";
      flagError = 1;
    } else {
      document.getElementById("message1").innerHTML = "";
    }

    /* Check for capital letters */
    if (!password.match(/[A-Z]/)) {
      document.getElementById("message2").innerHTML =
        "Password must have at least 1 capital letter";
      flagError = 1;
    } else {
      document.getElementById("message2").innerHTML = "";
    }

    /* Check for numbers */
    if (!password.match(/[0-9]/)) {
      document.getElementById("message3").innerHTML =
        "Password must have at least 1 number";
      flagError = 1;
    } else {
      document.getElementById("message3").innerHTML = "";
    }

    /* Check for special character */
    if (!password.match(/[!@#$%&*\-_\\.+()]/)) {
      document.getElementById("message4").innerHTML =
        "Password must have at least 1 special character";
      flagError = 1;
    } else {
      document.getElementById("message4").innerHTML = "";
    }

    /* Check for length */
    if (password.length < 8) {
      document.getElementById("message5").innerHTML =
        "Password must have a minimum of 8 characters";
      flagError = 1;
    } else {
      document.getElementById("message5").innerHTML = "";
    }

    /* Check for password cannot equal User ID */
    if (password === user || password.includes(user)) {
      document.getElementById("message6").innerHTML =
        "Password cannot be the same as the User ID"
      flagError = 1;
    }
    else {
      document.getElementById("message6").innerHTML = "";
    }

    if (flagError === 0) {
      document.getElementById("message3").innerHTML = "Valid password";
    }
  }

  /* Confirm password input */
  function comparePassword() {
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("confirmPassword").value;

    if (password2 !== password1) {
      document.getElementById("confirmPassword-error").innerHTML = "Passwords does not match";
    }
    else {
      document.getElementById("confirmPassword-error").innerHTML = "Passwords match";
    }
  }


/* Removes the input the user provided */
function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}

/* Shows alert box for user */
function showAlert() {
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");
  alertBox.style.display = "block";
  closeAlert.onclick = function () {
    alertBox.style.display = "none";
  }
}


/* Validates the information on the form */
function validateAll() {
  let valid = true;

  if (!validateFirstName()) {
    valid = false;
  }
  if (!validateLastName()) {
    valid = false;
  }
  if (!validateEmail()) {
    valid = false;
  }
  if (!validateDob()) {
    valid = false;
  }
  if (!validateSSN()) {
    valid = false;
  }
  if (!validatePhone()) {
    valid = false;
  }
  if (!validateAddress()) {
    valid = false;
  }
  if (!validateCity()) {
    valid = false;
  }
  if (!validateZip()) {
    valid = false;
  }
  if (!validateUserID()) {
    valid = false;
  }
  if (!validatePassword()) {
    valid = false;
  }
  if (!comparePassword()) {
    valid = false;
  }


  if (valid) {
    document.getElementById("submitButton").disabled = false;
  } else {
    showAlert();
  }
}






