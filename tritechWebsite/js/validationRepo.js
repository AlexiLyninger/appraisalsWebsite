//REGEX VALIDATING INPUT FIELDS

function validateName(name_input) {
  let re = /[A-Za-z0-9]/;
  return re.test(name_input);
}
function validateEmail(input_str) {
  let re = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  return re.test(input_str);
}
function validatePhoneNumber(input) {
  let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(input);
}

//SHOW/HIDE VALID ENTRY ERROR
function validEmail() {
  let email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    document.getElementById("email_error").classList.remove("hidden");
    document.getElementById("email").classList.add("err_border");
    event.preventDefault();
  } else {
    document.getElementById("email_error").classList.add("hidden");
    document.getElementById("email").classList.remove("err_border");
  }
}
function validPhone() {
  let phone = document.getElementById("phone").value;
  if (!validatePhoneNumber(phone)) {
    document.getElementById("phone_error").classList.remove("hidden");
    document.getElementById("phone").classList.add("err_border");
    event.preventDefault();
  } else {
    document.getElementById("phone_error").classList.add("hidden");
    document.getElementById("phone").classList.remove("err_border");
  }
}
function validName() {
  let _name = document.getElementById("name").value;
  if (!validateName(_name)) {
    document.getElementById("name_error").classList.remove("hidden");
    document.getElementById("name").classList.add("err_border");
    event.preventDefault();
  } else {
    document.getElementById("name_error").classList.add("hidden");
    document.getElementById("name").classList.remove("err_border");
  }
}

//CALL VALID ENTRY FUNCTIONS
function validForm() {
  validEmail();
  validPhone();
  validName();
}

export { validateName, validateEmail, validatePhoneNumber, validForm };
