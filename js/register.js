function wrapperRegister() {
    var firstNameForm = document.getElementById('pp-firstname');
    var firstNameValue = document.getElementById('pp-firstname').value;

    var lastNameForm = document.getElementById('pp-lastname');
    var lastNameValue = document.getElementById('pp-lastname').value;

    var emailForm = document.getElementById('pp-email');
    var emailValue = document.getElementById('pp-email').value;

    var passwordForm = document.getElementById('pp-password');
    var passValue = document.getElementById('pp-password').value;

    var errorForm = document.getElementById('form-error-div');

    var errorText1 = document.getElementById('error-message1');
    var errorText2 = document.getElementById('error-message2');
    var errorText3 = document.getElementById('error-message3');
    var errorText4 = document.getElementById('error-message4');
    var mgs2 = document.getElementById('li-mgs2');
    var mgs3 = document.getElementById('li-mgs3');
    var mgs4 = document.getElementById('li-mgs4');
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+![a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (firstNameValue == "" && lastNameValue == "" && emailValue == "" && passValue == "") {
        document.getElementById("error-message1").innerHTML = "Please Enter Your First Name.";
        document.getElementById("error-message2").innerHTML = "Please Enter Your Last Name.";
        document.getElementById("error-message3").innerHTML = "Please Enter Your Email Name.";
        document.getElementById("error-message4").innerHTML = "Please Enter Your Password.";
        
        firstNameForm.focus();
        firstNameForm.style.border = "1px solid #d20000";
        firstNameForm.style.background = "#fff8f8";

        lastNameForm.style.border = "1px solid #d20000";
        lastNameForm.style.background = "#fff8f8";

        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorText1.style.color = "red";
        errorText2.style.color = "red";
        errorText3.style.color = "red";
        errorText4.style.color = "red";
        errorForm.style.display = "block";
        return false;
    } else if (firstNameValue.length < 2 || firstNameValue.length > 10) {
        document.getElementById("error-message1").innerHTML = "First Name Must Be 2 - 10 letter.";
        document.getElementById("error-message2").innerHTML = "Please Enter Your Last Name.";
        document.getElementById("error-message3").innerHTML = "Please Enter Your Email Name.";
        document.getElementById("error-message4").innerHTML = "Please Enter Your Password.";

        firstNameForm.focus();
        firstNameForm.style.border = "1px solid #d20000";
        firstNameForm.style.background = "#fff8f8";

        lastNameForm.style.border = "1px solid #d20000";
        lastNameForm.style.background = "#fff8f8";

        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorForm.style.display = "block";
        errorText1.style.color = "red";
        errorText2.style.color = "#3d4246";
        errorText3.style.color = "#3d4246";
        errorText4.style.color = "#3d4246";
        return false;
    } else if (lastNameValue == "" || lastNameValue.length < 2 || lastNameValue.length > 10) {
        document.getElementById("error-message1").innerHTML = "First Name is valid.";
        document.getElementById("error-message2").innerHTML = "Last Name can't Be Blank Must Be 2 - 10 letter.";
        document.getElementById("error-message3").innerHTML = "Please Enter Your Email Name.";
        document.getElementById("error-message4").innerHTML = "Please Enter Your Password.";

        lastNameForm.focus();
        firstNameForm.style.border = "1px solid #ccc";
        firstNameForm.style.background = "#FFFFFF";

        lastNameForm.style.border = "1px solid #d20000";
        lastNameForm.style.background = "#fff8f8";

        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorForm.style.display = "block";
        errorText1.style.color = "#3d4246";
        errorText2.style.color = "red";
        errorText3.style.color = "#3d4246";
        errorText4.style.color = "#3d4246";
        return false;
    } else if (emailValue == "" || emailValue.indexOf('@') < 6) {
        document.getElementById("error-message1").innerHTML = "First Name is valid.";
        document.getElementById("error-message2").innerHTML = "Last Name is valid.";
        document.getElementById("error-message3").innerHTML = "Email Address Can't Be Blank. <br> Must Be Use [a-z] [1-9] [@] [.]";
        document.getElementById("error-message4").innerHTML = "Please Enter Your Password.";

        emailForm.focus();
        firstNameForm.style.border = "1px solid #ccc";
        firstNameForm.style.background = "#FFFFFF";

        lastNameForm.style.border = "1px solid #ccc";
        lastNameForm.style.background = "#FFFFFF";

        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorForm.style.display = "block";
        errorText1.style.color = "#3d4246";
        errorText2.style.color = "#3d4246";
        errorText3.style.color = "red";
        errorText4.style.color = "#3d4246";
        return false;
    } else if ((emailValue.charAt(emailValue.length - 4) != '.') && (emailValue.charAt(emailValue.length - 3) != '.')) {
        document.getElementById("error-message1").innerHTML = "First Name is valid.";
        document.getElementById("error-message2").innerHTML = "Last Name is valid.";
        document.getElementById("error-message3").innerHTML = "Email Address Invalid Position '.abc/.ab'";
        document.getElementById("error-message4").innerHTML = "Please Enter Your Password.";

        emailForm.focus();
        firstNameForm.style.border = "1px solid #ccc";
        firstNameForm.style.background = "#FFFFFF";

        lastNameForm.style.border = "1px solid #ccc";
        lastNameForm.style.background = "#FFFFFF";

        emailForm.style.border = "1px solid #d20000";
        emailForm.style.background = "#fff8f8";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorForm.style.display = "block";
        errorText1.style.color = "#3d4246";
        errorText2.style.color = "#3d4246";
        errorText3.style.color = "red";
        errorText4.style.color = "#3d4246";
        return false;
    } else if (passValue == "" || ((passValue.length < 6) || (passValue.length > 16))) {
        document.getElementById("error-message1").innerHTML = "First Name is valid.";
        document.getElementById("error-message2").innerHTML = "Last Name is valid.";
        document.getElementById("error-message3").innerHTML = "Email Address is valid.";
        document.getElementById("error-message4").innerHTML = "Password Can't Be Blank Must Be 8-16 letter Use. ";

        passwordForm.focus();
        firstNameForm.style.border = "1px solid #ccc";
        firstNameForm.style.background = "#FFFFFF";

        lastNameForm.style.border = "1px solid #ccc";
        lastNameForm.style.background = "#FFFFFF";

        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFFFFF";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorForm.style.display = "block";
        errorText1.style.color = "#3d4246";
        errorText2.style.color = "#3d4246";
        errorText3.style.color = "#3d4246";
        errorText4.style.color = "red";
        return false;
    } else if (passValue.search(/[1-9]/) == -1 || passValue.search(/[a-z]/) == -1 || passValue.search(/[A-Z]/) == -1 || passValue.search(/[!\@\#\$\%\&\*\=]/) == -1) {
        document.getElementById("error-message1").innerHTML = "First Name is valid.";
        document.getElementById("error-message2").innerHTML = "Last Name is valid.";
        document.getElementById("error-message3").innerHTML = "Email Address is valid.";
        document.getElementById("error-message4").innerHTML = "Password Can't Be Strong Use [1-9][a-z][A-Z][!\@\#\$\%\&\*\=]. ";

        passwordForm.focus();
        firstNameForm.style.border = "1px solid #ccc";
        firstNameForm.style.background = "#FFFFFF";

        lastNameForm.style.border = "1px solid #ccc";
        lastNameForm.style.background = "#FFFFFF";

        emailForm.style.border = "1px solid #ccc";
        emailForm.style.background = "#FFFFFF";

        passwordForm.style.border = "1px solid #d20000";
        passwordForm.style.background = "#fff8f8";

        errorForm.style.display = "block";
        errorText1.style.color = "#3d4246";
        errorText2.style.color = "#3d4246";
        errorText3.style.color = "#3d4246";
        errorText4.style.color = "red";
        return false;
    } else {
        document.getElementById("error-message1").innerHTML = "Register Successfull";
        errorForm.focus();
        errorForm.style.display = "block";
        errorForm.style.border = "1px solid green";
        errorForm.style.background = "rgb(213 253 209)";
        errorText1.style.color = "green";
        firstNameForm.style.border = "1px solid green";
        firstNameForm.style.background = "rgb(213 253 209)";
        lastNameForm.style.border = "1px solid green";
        lastNameForm.style.background = "rgb(213 253 209)";
        emailForm.style.border = "1px solid green";
        emailForm.style.background = "rgb(213 253 209)";
        passwordForm.style.border = "1px solid green";
        passwordForm.style.background = "rgb(213 253 209)";
        mgs2.style.display = "none";
        mgs3.style.display = "none";
        mgs4.style.display = "none";
        return true;
    }

}