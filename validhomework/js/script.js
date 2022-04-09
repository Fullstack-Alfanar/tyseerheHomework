function validation() {
    let email = document.getElementById("email").value;
    let pattern = /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(pattern)) {
        return console.log(true);

    }

    else {

        return console.log(false);
    }
}
