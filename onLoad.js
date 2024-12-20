function adjustStyles() {

    try {
        const allButtons = document.querySelectorAll("button");
        allButtons.forEach((button) => {
            button.classList = ""
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
        })
    } catch (err) {
        console.log(err)
    }
}
adjustStyles() 