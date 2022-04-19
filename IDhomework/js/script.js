
function checkName() { // check the name
  if (fname.value.length <= 11 && fname.value.length >= 2) {
    return true + " " + "you have the real name";
  }
  else {
    return false + " " + "make sure the input is between 2-11 characters long";
  }
}


function validationAge(age) { // check age
  if (age >= 0 && age <= 110) {
    return true;
  }
  else {
    return false;
  }
}

function validation(email) //check email
{
  let pattern = /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(pattern)) {

    return true;
  }

  else {

    return false;
  }

}

function pad(number, length, p_paddingChar) {
  var str = '' + number;
  while (str.length < length) {
    str = p_paddingChar + str;
  }
  return str;
}

function IsValidID(p_text) {

  var txtId = pad(p_text, 9, '0');
  var sum = 0;
  var digit;
  for (var i = 0; i < 9; i++) {
    digit = parseInt(txtId[i]);
    if (i % 2 != 0) {
      digit *= 2;
      if (digit > 9) {
        digit = (digit % 10) + 1;
      }
    }
    sum += digit;
  }

  sum = (sum % 10);
  if (sum == 0) {
    return true;
  }

  else {
    return false;
  }


}