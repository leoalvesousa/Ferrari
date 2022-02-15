let btnOpen = document.querySelector("#btn-open");
let body = document.querySelector("body");
let btnClose = document.querySelector("#btn-close");
let btnLog = document.querySelector(".btn-register");
let menu = document.querySelector(".menu");
let btnlogout = document.querySelector(".logout");

btnOpen.addEventListener("click", () => {
  body.classList.add("open-menu");
});

btnClose.addEventListener("click", () => {
  body.classList.remove("open-menu");
});

btnLog.addEventListener("click", () => {
  menu.classList.add("logged");
});
btnlogout.addEventListener("click", () => {
  menu.classList.remove("logged");
});
