const navBtnElem = document.getElementById("btn")
const wrapElem = document.getElementById("main-wrap")
document.addEventListener("scroll", (event) => {
    const navBtnRect = navBtnElem.getBoundingClientRect()
    const mainWrapRect = wrapElem.getBoundingClientRect()
    if (navBtnRect.top <= 0) {
        navBtnElem.className = "nav-btn fixed-nav-btn"
    }

    if (mainWrapRect.top - navBtnRect.height >= 0) {
        navBtnElem.className = "nav-btn"
    }
})
