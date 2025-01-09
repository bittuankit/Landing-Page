const icon = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const navItems = document.querySelectorAll(".nav-items ul a");
const para = document.querySelectorAll("p");
const company = document.querySelectorAll(".company li");

icon.addEventListener("click", (e) => {
  console.log(e);
  if (body.classList.contains("bg-black")) {
    navItems.forEach((item) => (item.style.color = "#000"));
    para.forEach((item) => (item.style.color = "#444343c1"));
  } else {
    navItems.forEach((item) => (item.style.color = "#fff"));
    para.forEach((item) => (item.style.color = "#fffc"));
  }
  body.classList.toggle("bg-black");
  company.forEach((comp) => comp.classList.toggle("bg-company"));
});
