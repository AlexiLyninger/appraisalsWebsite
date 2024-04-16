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

function closeDropDown() {
  window.addEventListener("click", (e) => {
    if(e.target.className !== "menu-div" && 
    e.target !== button &&
    e.target.id !== "links") {
    links.classList.remove("header-display");
    };
  });
}

export { seeDropDown, closeDropDown};
