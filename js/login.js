function wrapperlogin() {
    var emailForm = document.getElementById('pp-email');
    var emailValue = document.getElementById('pp-email').value;

    var passwordForm = document.getElementById('pp-password');
    var passValue = document.getElementById('pp-password').value;

    var errorForm = document.getElementById('form-error-mess');
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+![a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (emailValue == "" && passValue == "") {
        document.getElementById("error-message").innerHTML = "Please Enter Your Email Address or Password.";
        emailForm.focus();
        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        errorForm.style.display = "block";
        return false;
    } else if (emailValue.indexOf('@') <= 3) {
        document.getElementById("error-message").innerHTML = "Invalid 3 of letter (abc123 @) position";
        emailForm.focus();
        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";
        passwordForm.style.border = "1px solid #ccc";
        passwordForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (emailValue.search(/[1-9]/) == -1) {
        document.getElementById("error-message").innerHTML = "Email most be use (1-9) number";
        emailForm.focus();
        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";
        passwordForm.style.border = "1px solid #ccc";
        passwordForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if ((emailValue.charAt(emailValue.length - 4) != '.') && (emailValue.charAt(emailValue.length - 3) != '.')) {
        document.getElementById("error-message").innerHTML = "Invalid '.com/.bd' position";
        emailForm.focus();
        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";
        passwordForm.style.border = "1px solid #ccc";
        passwordForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (regx.test(emailValue)) {
        document.getElementById("error-message").innerHTML = "The character cannot be used in Email ";
        emailForm.focus();
        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";
        passwordForm.style.border = "1px solid #ccc";
        passwordForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (passValue == "") {
        document.getElementById("error-message").innerHTML = "Password filed is empty";
        passwordForm.focus();
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if ((passValue.length <= 5) || (passValue.length >= 21)) {
        document.getElementById("error-message").innerHTML = "Password most be use 6 - 20 number";
        passwordForm.focus();
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (passValue.search(/[1-9]/) == -1) {
        document.getElementById("error-message").innerHTML = "Password most be use (1-9) number";
        passwordForm.focus();
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (passValue.search(/[a-z]/) == -1) {
        document.getElementById("error-message").innerHTML = "Password most be use (a-z) number";
        passwordForm.focus();
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (passValue.search(/[A-Z]/) == -1) {
        document.getElementById("error-message").innerHTML = "Password most be use (A-Z) number";
        passPass.focus();
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else if (passValue.search(/[!\@\#\$\%\&\*\=]/) == -1) {
        document.getElementById("error-message").innerHTML = "Password most be use (!, @, #, $, %, &, *, =) number";
        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";
        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFF";
        errorForm.style.display = "block";
        return false;
    } else {
        document.getElementById("error-message").innerHTML = "Register Successfull";
        errorForm.focus();
        errorForm.style.display = "block";
        errorForm.style.border = "1px solid green";
        errorForm.style.background = "rgb(213 253 209)";
        emailForm.style.border = "1px solid green";
        emailForm.style.background = "rgb(213 253 209)";
        passwordForm.style.border = "1px solid green";
        passwordForm.style.background = "rgb(213 253 209)";
        return false;
    }

}