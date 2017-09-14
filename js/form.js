

function validateForm() {
    var valid = 1;
    var email = document.getElementById('email');
    var email_validation = document.getElementById("email_validation");
    var name = document.getElementById('name');
    var name_validation = document.getElementById("name_validation");
    var message_validation = document.getElementById("message_validation");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name.value === "") {
        valid = 0;
        name_validation.innerHTML = "To pole jest wymagane";
        name_validation.style.display = "block";
        name_validation.style.color = "red";
        name_validation.style.fontFamily = "Rajdhani";
        name_validation.style.fontSize = "1.2em";


    } else {
        name_validation.style.display = "none";
        name_validation.parentNode.style.backgroundColor = "transparent";
    }

    if (message.value === "") {
        valid = 0;
        message_validation.innerHTML = "To pole jest wymagane";
        message_validation.style.display = "block";
        message_validation.style.color = "red";
        message_validation.style.fontFamily = "Rajdhani";
        message_validation.style.fontSize = "1.2em";
    } else {
        message_validation.style.display = "none";
        message_validation.parentNode.style.backgroundColor = "transparent";
    }

    if (email.value === "") {
        valid = 0;
        email_validation.innerHTML = "To pole jest wymagane";
        email_validation.style.display = "block";
        email_validation.style.color = "red";
        email_validation.style.fontFamily = "Rajdhani";
        email_validation.style.fontSize = "1.2em";
    } else {
        email_validation.style.display = "none";
        email_validation.parentNode.style.backgroundColor = "transparent";
    }

    if(!filter.test(email.value)) {
        valid = 0;
        email_validation.innerHTML = "Wprowadź poprawny adres e-mail";
        email_validation.style.display = "block";
        email_validation.style.color = "red";
        email_validation.style.fontFamily = "Rajdhani";
        email_validation.style.fontSize = "1.2em";
    } else {
        email_validation.style.display = "none";
        email_validation.parentNode.style.backgroundColor = "transparent";
        alert("dziekuje wiadomosc zostala wyslana");

    }
    if (!valid)
        return false;
}