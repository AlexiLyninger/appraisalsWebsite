const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("submitted");

function close() {
  modal.classList.add("hidden");
}

function windowClose(event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
}

export { span, modal, close, windowClose };
