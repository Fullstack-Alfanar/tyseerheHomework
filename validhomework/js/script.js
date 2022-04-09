function validation(email) {
    let pattern = /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(pattern)) {

        return alert(true);
    }

    else {

        return alert(false);
    }
}

let email=prompt("enter your email");
validation(email);

