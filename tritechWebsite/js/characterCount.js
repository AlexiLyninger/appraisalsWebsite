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

export { runningCount, maxChars };
