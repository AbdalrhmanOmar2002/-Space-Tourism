const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when Someone clicks the hamburger button
navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  // if the nav is closed, open it
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    // if the nav is open, close it
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
