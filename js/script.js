const navElements = document.querySelector(".navigation__list")
const navIcon = document.querySelector(".navigation__checkbox")

navElements.addEventListener("click", (e) => {
    navIcon.checked = false;
})

window.onload = () => {
    let urlArr = window.location.search.split('?')
    console.log(urlArr)
    if (urlArr.length === 2 && urlArr[1] === 'showMessage') {
        let message = document.querySelector(".message")
        message.classList.remove('message__hidden');
        setTimeout(() => {
            message.classList.add('message__hidden');
        }, 3000)
    }
}