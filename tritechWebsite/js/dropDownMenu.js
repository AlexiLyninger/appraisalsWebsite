const button = document.getElementById("menu");

//SHOW/HIDE HAMBURGER MENU
function seeDropDown() {
  button.addEventListener("click", function () {
    const links = document.getElementById("links");
    if (links.classList.contains("header-display")) {
      links.classList.remove("header-display");
    } else {
      links.classList.add("header-display");
    }
  });
}

export { seeDropDown };
