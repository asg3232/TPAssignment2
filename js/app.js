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
  console.log(address1);
  console.log(address1.length);

  if (address1.length < 2) {
    document.getElementById("address-error").innerHTML = "Please enter your address"
    return false;
  } else {
    document.getElementById("address-error").innerHTML = "";
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
  function confirmPassword() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password2 !== password1) {
      document.getElementById("password2-error").innerHTML = "Passwords does not match";
    }
    else {
      document.getElementById("password2-error").innerHTML = "";
    }
  }


/* Removes the input the user provided */
function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}







