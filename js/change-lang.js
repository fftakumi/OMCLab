const jaBtnElem = document.getElementById("ja-btn")
const enBtnElem = document.getElementById("en-btn")
const jaElems = document.getElementsByClassName("ja")
const enElems = document.getElementsByClassName("en")

jaBtnElem.addEventListener("click", () => {
    for (let i = 0; i < jaElems.length; i++) {
        jaElems[i].style.display = "inline"
        enElems[i].style.display = "none"
    }
})

enBtnElem.addEventListener("click", () => {
    for (let i = 0; i < jaElems.length; i++) {
        jaElems[i].style.display = "none"
        enElems[i].style.display = "inline"
    }
})