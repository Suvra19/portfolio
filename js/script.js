const navElements = document.querySelector(".navigation__list")
const navIcon = document.querySelector(".navigation__checkbox")

navElements.addEventListener("click", (e) => {
    navIcon.checked = false;
})