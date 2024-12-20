const button = document.getElementById("brute-button")
button.addEventListener('click', function () {
    if (button.classList.contains('active')) {
        button.classList.remove("active");
        button.classList.add("disable");
        button.innerText = "ON"
    } else {
        button.classList.remove("disable");
        button.classList.add("active");
        button.innerText = "OFF"
    }
})

if (button.classList.contains("active")) {
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