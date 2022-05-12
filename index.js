const navBar = document.querySelector(".polygon");
const navBarText = document.querySelector(".contact-header");
const btn = document.querySelector(".hamburger");

btn.addEventListener("click", () => {
    navBarText.classList.toggle("active");
    navBar.classList.toggle("active-one");
    console.log(navBar);
});
