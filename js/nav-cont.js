const navElem = document.getElementById("nav")
const mainWrapElem = document.getElementById("main-wrap")
document.addEventListener("scroll", (event) => {
    const navRect = navElem.getBoundingClientRect()
    const mainWrapRect = mainWrapElem.getBoundingClientRect()
    if (navRect.top <= 0) {
        navElem.className = "front-fixed fixed-nav-wrap"
    }

    if (mainWrapRect.top - navRect.height >= 0) {
        navElem.className = "nav-wrap front-fixed"
    }

})
