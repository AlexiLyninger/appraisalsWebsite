
import { seeDropDown, closeDropDown} from "./js/dropDownMenu.js";
import { runningCount, maxChars } from "./js/characterCount.js";
import { validateName, validateEmail, validatePhoneNumber, validForm,} from "./js/validationRepo.js";
import { handleSubmit } from "./js/requests.js";
import * as modal from "./js/modal.js";

//SHOW/HIDE DROPDOWN HAMBURGER MENU
seeDropDown();
closeDropDown();

//CHARACTER COUNT

runningCount();

//SHOW/HIDE VALID ENTRY ERROR
function validateForm(e) {
  validForm(e);
}

//POST & GET AFTER VALIDATED INPUT SUBMITTED
function validatedSubmit(e) {
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
    handleSubmit(e);
  }
}

//CALL VALIDATION/POST & GET FUNCTIONS ON SUBMIT
const form = document.querySelector("form");

(function isOnContact() {
  if (form) {
    form.addEventListener("submit", (e) => {
      validateForm(e);
      validatedSubmit(e);
    });
  }
})();

//CLOSE SUBMISSION CONFIRMATION/FAILURE MODALS
window.addEventListener("click", modal.windowClose);

(function isModal() {
  if (modal.span) {
    modal.span.addEventListener("click", modal.close);
  }
})();

(function isModal2() {
  if (modal.span2) {
    modal.span2.addEventListener("click", modal.close2);
  }
})();