const icon = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const tempDiv = document.querySelector(".bg");
const navItems = document.querySelectorAll(".nav-items ul a");
const para = document.querySelectorAll("p");
const company = document.querySelectorAll(".company li");

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
  header.classList.toggle("bg-black");
});

//gsap

//home

gsap.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 1,
});

gsap.from(".btn", {
  y: -20,
  opacity: 0,
  duration: 1,
});

gsap.from(".fa-moon", {
  y: -20,
  opacity: 0,
  duration: 1,
});

gsap.from(navItems, {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".company li img", {
  x: -1800,
  rotation: -360,
  duration: 1.5,
});

gsap.from(".hero-header .right", {
  x: 1800,
  duration: 1.5,
});

gsap.from(".hero-footer h3, .hero-footer p", {
  x: 1800,
  duration: 1.5,
});

gsap.from(".hero-header .left", {
  x: -1800,
  duration: 1.5,
});

gsap.from(".bg", {
  rotate: "10deg",
});

// community

gsap.from(".community-content .heading", {
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".community-content .heading",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".company-container .cmp-des", {
  x: 2000,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".community-content .cmp-des",
    scroller: "body",
    start: "top 80%",
  },
});

//about

gsap.from(".about .left", {
  x: -1800,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .left",
    scroller: "body",
    start: "top 90%",
  },
});

gsap.from(".about .right", {
  x: 1800,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .left",
    scroller: "body",
    start: "top 90%",
  },
});

//contact

gsap.from(".contact .bg", {
  minWidth: "0%",
  height: "0",
  duration: 2,
  scrollTrigger: {
    trigger: ".contact",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 2,
  },
});
