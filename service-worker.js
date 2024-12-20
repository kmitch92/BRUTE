export function adjustStyles() {
    const allElements = document.querySelectorAll("*");
    try {
        allElements.forEach((elem) => {
            elem.style.backgroundColor = "black"
            elem.style.color = "white"
            elem.style.borderRadius = "0"
            // elem.style.fontFamily = "Georgia, serif"
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

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: adjustStyles
//     });
// });