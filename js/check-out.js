function checkoutpage() {
    var emailForm = document.getElementById('pc-email');
    var emailValue = document.getElementById('pc-email').value;

    var lastNameForm = document.getElementById('pc-lastname');
    var lastNameValue = document.getElementById('pc-lastname').value;

    var addressForm = document.getElementById('pc-address');
    var addressValue = document.getElementById('pc-address').value;

    var cityForm = document.getElementById('inputCity');
    var cityValue = document.getElementById('inputCity').value;

    var zipForm = document.getElementById('inputZip');
    var zipValue = document.getElementById('inputZip').value;

    var email = document.getElementById('email-text');
    var lastname = document.getElementById('lastname-text');
    var address = document.getElementById('address-text');
    var city = document.getElementById('city-text');
    var postcode = document.getElementById('postcode-text');

    if (emailValue == "" && lastNameValue == "" && addressValue == "" && cityValue == "" && zipValue == "") {
        document.getElementById("email-text").innerHTML = "Enter a valid email";
        document.getElementById("lastname-text").innerHTML = "Enter a last name";
        document.getElementById("address-text").innerHTML = "Enter an address";
        document.getElementById("city-text").innerHTML = "Enter a city";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code";

        emailForm.focus();
        emailForm.style.border = "2px solid #e32c2b";
        lastNameForm.style.border = "2px solid #e32c2b";
        addressForm.style.border = "2px solid #e32c2b";
        cityForm.style.border = "2px solid #e32c2b";
        zipForm.style.border = "2px solid #e32c2b";
        return false;
    } else if (emailValue == "" || emailValue.indexOf('@') < 6) {
        document.getElementById("email-text").innerHTML = "Enter a valid email or 6 letter over @ use";
        document.getElementById("lastname-text").innerHTML = "Enter a last name";
        document.getElementById("address-text").innerHTML = "Enter an address";
        document.getElementById("city-text").innerHTML = "Enter a city";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code";

        emailForm.focus();
        emailForm.style.border = "2px solid #e32c2b";
        lastNameForm.style.border = "2px solid #e32c2b";
        addressForm.style.border = "2px solid #e32c2b";
        cityForm.style.border = "2px solid #e32c2b";
        zipForm.style.border = "2px solid #e32c2b";
        return false;
    } else if ((emailValue.charAt(emailValue.length - 4) != '.') && (emailValue.charAt(emailValue.length - 3) != '.')) {
        document.getElementById("email-text").innerHTML = "Enter a valid email or use .abe/.ab";
        document.getElementById("lastname-text").innerHTML = "Enter a last name";
        document.getElementById("address-text").innerHTML = "Enter an address";
        document.getElementById("city-text").innerHTML = "Enter a city";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code";

        emailForm.focus();
        emailForm.style.border = "2px solid #e32c2b";
        lastNameForm.style.border = "2px solid #e32c2b";
        addressForm.style.border = "2px solid #e32c2b";
        cityForm.style.border = "2px solid #e32c2b";
        zipForm.style.border = "2px solid #e32c2b";
        return false;
    } else if (lastNameValue == "" || lastNameValue.length < 2 || lastNameValue.length > 20) {
        document.getElementById("email-text").innerHTML = "";
        document.getElementById("lastname-text").innerHTML = "Enter a last name 2 - 20 Letter";
        document.getElementById("address-text").innerHTML = "Enter an address";
        document.getElementById("city-text").innerHTML = "Enter a city";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code";

        lastNameForm.focus();
        emailForm.style.border = "2px solid #2bb573";
        lastNameForm.style.border = "2px solid #e32c2b";
        addressForm.style.border = "2px solid #e32c2b";
        cityForm.style.border = "2px solid #e32c2b";
        zipForm.style.border = "2px solid #e32c2b";

        return false;
    } else if (addressValue == "" || addressValue.length < 5) {
        document.getElementById("email-text").innerHTML = "";
        document.getElementById("lastname-text").innerHTML = "";
        document.getElementById("address-text").innerHTML = "Enter an address or must be 10 Letter Over";
        document.getElementById("city-text").innerHTML = "Enter a city";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code";

        addressForm.focus();
        emailForm.style.border = "2px solid #2bb573";
        lastNameForm.style.border = "2px solid #2bb573";
        addressForm.style.border = "2px solid #e32c2b";
        cityForm.style.border = "2px solid #e32c2b";
        zipForm.style.border = "2px solid #e32c2b";

        return false;
    } else if (cityValue == "" || cityValue.length < 4) {
        document.getElementById("email-text").innerHTML = "";
        document.getElementById("lastname-text").innerHTML = "";
        document.getElementById("address-text").innerHTML = "";
        document.getElementById("city-text").innerHTML = "Enter a city must be 4 Letter over";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code";

        cityForm.focus();
        emailForm.style.border = "2px solid #2bb573";
        lastNameForm.style.border = "2px solid #2bb573";
        addressForm.style.border = "2px solid #2bb573";
        cityForm.style.border = "2px solid #e32c2b";
        zipForm.style.border = "2px solid #e32c2b";

        email.style.display = "none";
        lastname.style.display = "none";
        address.style.display = "none";
        return false;
    } else if (zipValue == "" || zipValue.length < 4 || zipValue.length > 5) {
        document.getElementById("email-text").innerHTML = "";
        document.getElementById("lastname-text").innerHTML = "";
        document.getElementById("address-text").innerHTML = "";
        document.getElementById("city-text").innerHTML = "";
        document.getElementById("postcode-text").innerHTML = "Enter a ZIP / postal code for 4 Number";

        zipForm.focus();
        emailForm.style.border = "2px solid #2bb573";
        lastNameForm.style.border = "2px solid #2bb573";
        addressForm.style.border = "2px solid #2bb573";
        cityForm.style.border = "2px solid #2bb573";
        zipForm.style.border = "2px solid #e32c2b";

        email.style.display = "none";
        lastname.style.display = "none";
        address.style.display = "none";
        city.style.display = "none";
        return false;
    } else {
        document.getElementById("email-text").innerHTML = "";
        document.getElementById("lastname-text").innerHTML = "";
        document.getElementById("address-text").innerHTML = "";
        document.getElementById("city-text").innerHTML = "";
        document.getElementById("postcode-text").innerHTML = "";

        emailForm.style.border = "2px solid #2bb573";
        lastNameForm.style.border = "2px solid #2bb573";
        addressForm.style.border = "2px solid #2bb573";
        cityForm.style.border = "2px solid #2bb573";
        zipForm.style.border = "2px solid #2bb573";

        email.style.display = "none";
        lastname.style.display = "none";
        address.style.display = "none";
        city.style.display = "none";
        postcode.style.display = "none";
        return true;
    }

}

