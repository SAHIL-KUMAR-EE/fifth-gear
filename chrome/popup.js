// popup.js
document.addEventListener('DOMContentLoaded', function () {
    var clickCount = 0;
    document.getElementById("b1").onclick = function () {
        // clickCount toggles the button
        if (clickCount % 2 === 0) {
            document.getElementById("b_image").src = "button_on.svg";
            chrome.tabs.executeScript({
                file: 'highlighter.js'
            });
        } else {
            document.getElementById("b_image").src = "button_off.svg";
            chrome.tabs.reload();
        }
        clickCount++;
    }
    chrome.runtime.onMessage.addListener(function (message) {
        if (message.action === 'sendMatchCounter') {
            document.getElementById('count').textContent = message.matchCounter;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("dark-mode").onclick = function () {
        document.body.classList.toggle("light");
        document.getElementById("extension_name").classList.toggle("light");
        document.getElementById("b1").classList.toggle("light");
        document.querySelector(".github-link").classList.toggle("light");
        document.getElementById("dark-mode").classList.toggle("light");
    }
});
