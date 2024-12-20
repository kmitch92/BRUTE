const button = document.getElementById("brute-button")
button.addEventListener("click", () => {
    button.value = button.value ? false : true
    button.innerText = button.value ? "OFF" : "ON"
})

if (button.value) {
    try {
        const allElements = document.querySelectorAll("*");
        allElements.forEach((elem) => {
            elem.style.backgroundColor = "black"
            elem.style.color = "white"
            elem.style.borderRadius = "0"
            elem.style.fontFamily = "Georgia, serif"
            // if img
            // if(elem.attributes.)
            // if div
            // elem.style.backgroundColor = "black"
            // elem.style.backgroundColor = "black"
            // elem.style.backgroundColor = "black"
        })
    } catch (err) {
        console.log(err)
    }
}