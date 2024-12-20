function adjustStyles() {
    const allElements = document.querySelectorAll("*");
    try {
        allElements.forEach((elem) => {
            elem.classList = ""
            elem.style.backgroundColor = "black"
            elem.style.color = "white"
            elem.style.borderRadius = "0"
            elem.style.fontFamily = "Georgia, serif"
            elem.style.accentColor = "white"
            elem.style.backgroundImage = "none"
            elem.style.caretColor = "white"
            elem.style.columnRuleColor = "white"

            // elem.style.backgroundColor = "black"
            // elem.style.backgroundColor = "black"
        })
    } catch (err) {
        console.log(err)
    }
}
adjustStyles() 