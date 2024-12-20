const button = document.getElementById("brute-button")
button.addEventListener('click', function () {
    chrome.storage.local.get('brute_on', (data) => {
        if (data.brute_on) {
            chrome.storage.local.set({ 'brute_on': false })
            button.innerText = "ON"
        } else {
            chrome.storage.local.set({ 'brute_on': true })
            button.innerText = "OFF"
        }
    }
    )
}
)