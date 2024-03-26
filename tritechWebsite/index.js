import { seeDropDown } from "./js/dropDownMenu.js";
import { runningCount, validCharCount, maxChars } from "./js/characterCount.js";
import { validateName, validateEmail, validatePhoneNumber, validForm, } from "./js/validationRepo.js";
import { handleSubmit } from "./js/requests.js";
import * as modal from "./js/modal.js";

//SHOW/HIDE DROPDOWN HAMBURGER MENU
seeDropDown();

//CHARACTER COUNT
runningCount();

//SHOW/HIDE VALID ENTRY ERROR
function validateForm(event) {
  validForm();
  validCharCount();
}

//POST & GET AFTER VALIDATED INPUT SUBMITTED
function validatedSubmit() {
  const msgChars = msg.value.length;
  const email = document.getElementById("email").value;
  const _name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  if (
    validatePhoneNumber(phone) &&
    validateEmail(email) &&
    validateName(_name) &&
    msgChars <= maxChars
  ) {
    handleSubmit(event);
  };
}

//CALL VALIDATION/POST & GET FUNCTIONS ON SUBMIT
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  validateForm();
  validatedSubmit();
});

//CLOSE SUBMISSION CONFIRMATION MODAL
window.addEventListener("click", modal.windowClose);
modal.span.addEventListener("click", modal.close);
