const icon = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const tempDiv = document.querySelector(".bg");
const navItems = document.querySelectorAll(".nav-items ul a");
const para = document.querySelectorAll("p");
const company = document.querySelectorAll(".company li");

console.log(tempDiv);

icon.addEventListener("click", (e) => {
  if (body.classList.contains("bg-black")) {
    navItems.forEach((item) => (item.style.color = "#000"));
    para.forEach((item) => (item.style.color = "#444343c1"));
    company.forEach((comp) => {
      comp.classList.remove("bg-company");
    });
    tempDiv.style.display = "block";
  } else {
    navItems.forEach((item) => (item.style.color = "#fff"));
    para.forEach((item) => (item.style.color = "#fffc"));
    company.forEach((comp) => {
      comp.classList.add("bg-company");
    });
    tempDiv.style.display = "none";
  }
  body.classList.toggle("bg-black");
});
