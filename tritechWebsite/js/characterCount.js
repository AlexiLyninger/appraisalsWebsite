const charCount = document.getElementById("char-count");
const msg = document.getElementById("msg");
const maxChars = 250;

//COUNT/DISPLAY CHARACTERS
const countCharacters = () => {
  let msgChars = msg.value.length;
  let counter = maxChars - msgChars;
  charCount.textContent = "Max 250 characters. " + counter + "/250";
};

//RUN countCharacters WHILE TYPING
function runningCount() {
  if (msg) {
  msg.addEventListener("input", countCharacters);
  }
}

//SHOW/HIDE VALID ENTRY ERROR
function validCharCount() {
  let msgChars = msg.value.length;
  if (msgChars > maxChars) {
    document.getElementById("msg_error").classList.remove("hidden");
    document.getElementById("msg").classList.add("err_border");
    event.preventDefault();
  } else {
    document.getElementById("msg_error").classList.add("hidden");
    document.getElementById("msg").classList.remove("err_border");
  }
}

export { runningCount, validCharCount, maxChars };
