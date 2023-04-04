const menu = document.querySelector("#menu");

let toggle = false;
menu.addEventListener("click", function () {
  if (toggle === true) {
    document.getElementById("menu").src = "assets/images/icon-menu-close.svg";
    document.querySelector(".navitems").classList.toggle("active");
    document.querySelector("body").classList.add("dark");
  } else {
    document.getElementById("menu").src = "assets/images/icon-menu.svg";
    document.querySelector(".navitems").classList.toggle("active");
    document.querySelector("body").classList.remove("dark");
  }
  toggle = !toggle;
});
