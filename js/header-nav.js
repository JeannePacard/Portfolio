const buttonmenu = document.querySelector(".menu");
const resume = document.querySelector(".header-nav");

function openResume() {
  buttonmenu.addEventListener("click", () => {
    resume.classList.toggle("openmenu");
  });
}

openResume();
