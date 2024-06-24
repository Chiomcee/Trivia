// Validation of the regidtration page
function validateregistrationForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let username = document.forms.registrationForm.username.value;
    let email = document.forms.registrationForm.email.value;
    let password = document.forms.registrationForm.password.value;
    let confirmPassword = document.forms.registrationForm.confirmPassword.value;

    // Clear previous error messages
    document.getElementById('usernameErr').innerHTML = "";
    document.getElementById('emailErr').innerHTML = "";
    document.getElementById('passwordErr').innerHTML = "";
    document.getElementById('confirmPasswordErr').innerHTML = "";

    // Input validation
    let isValid = true;

    if (!username) {
        document.getElementById('usernameErr').innerHTML = "<br/>Username is required";
        document.forms.registrationForm.username.focus();
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailErr').innerHTML = "<br/>Email is required";
        document.forms.registrationForm.email.focus();
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailErr').innerHTML = "<br/>Enter a valid email address";
        document.forms.registrationForm.email.focus();
        isValid = false;
    }

    if (!password) {
        document.getElementById('passwordErr').innerHTML = "<br/>Password is required";
        document.forms.registrationForm.password.focus();
        isValid = false;
    }

    if (!confirmPassword) {
        document.getElementById('confirmPasswordErr').innerHTML = "<br/>Confirm Password is required";
        document.forms.registrationForm.confirmPassword.focus();
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordErr').innerHTML = "<br/>Passwords do not match";
        document.forms.registrationForm.confirmPassword.focus();
        isValid = false;
    }

    if (isValid) {
        // If validation passes, redirect to the game selection page
        window.location.href = './game_selection.html';
    }

    return false; // Prevent the form from submitting normally
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('password').addEventListener('input', validatePasswordMatch);
document.getElementById('confirmPassword').addEventListener('input', validatePasswordMatch);

function validatePasswordMatch() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordErr').innerHTML = "<br/>Passwords do not match";
    } else {
        document.getElementById('confirmPasswordErr').innerHTML = "";
    }
}
