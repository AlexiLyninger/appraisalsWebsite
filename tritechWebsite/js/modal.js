const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close2")[0];
const modal = document.getElementById("submitted");
const modal2 = document.getElementById("failed");

function close() {
  modal.classList.add("hidden");
}

function close2() {
  modal2.classList.add("hidden");
}

function windowClose(e) {
  if (e.target === modal || e.target === modal2) {
    modal.classList.add("hidden");
    modal2.classList.add("hidden");
  }
}

export { span, span2, modal, close, close2, windowClose };
