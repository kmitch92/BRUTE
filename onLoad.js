function adjustStyles() {

    try {
        const allImages = document.querySelectorAll("img");
        allImages.forEach((image) => {
            image.classList.add("image")
        })
        const allElements = document.querySelectorAll("*");
        allElements.forEach((elem) => {
            elem.style.backgroundColor = "black"
            elem.style.color = "white"
            elem.style.borderRadius = "0"
            elem.style.fontFamily = "Georgia, serif"
            elem.style.accentColor = "white"
            elem.style.caretColor = "white"
            elem.style.columnRuleColor = "white"
            elem.classList.add("bruteforce")
        })
        const allButtons = document.querySelectorAll("button");
        allButtons.forEach((button) => {
            button.className = ""
            button.classList.add("buttonbruteforce")
        })
    } catch (err) {
        console.log(err)
    }
}
adjustStyles() 