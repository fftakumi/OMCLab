const navWrapElem= document.getElementById("nav-wrap")
const wrapElem = document.getElementById("main-wrap")
document.addEventListener("scroll", (event) => {
    const navBtnRect = navWrapElem.getBoundingClientRect()
    const mainWrapRect = wrapElem.getBoundingClientRect()
    if (navBtnRect.top <= 0) {
        navWrapElem.className = "nav-btn fixed-nav-btn"
    }

    if (mainWrapRect.top - navBtnRect.height >= 0) {
        navWrapElem.className = "nav-btn"
    }
})

const hamburgerBtnElem = document.getElementById("hamburger-btn")
const hamburgerOpenBtnElem = document.getElementById("hamburger-open-btn")
const hamburgerCloseBtnElem = document.getElementById("hamburger-close-btn")
const navBtnElem = document.getElementById("nav-btn")
hamburgerBtnElem.addEventListener("click", () => {
    hamburgerOpenBtnElem.classList.toggle("none-display")
    hamburgerCloseBtnElem.classList.toggle("none-display")
    navBtnElem.classList.toggle("hamburger-open")
    navBtnElem.classList.toggle("hamburger-close")
})
