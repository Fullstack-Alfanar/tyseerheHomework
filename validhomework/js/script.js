function validation() {
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern = /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(pattern)) {

        text.innerHTML = true + " " + "your email is valid";
        text.style.color = "#00ff00";
    }

    else {

        text.innerHTML = false + " " + "your email address invalid.";
        text.style.color = "red";
    }
}