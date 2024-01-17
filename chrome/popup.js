document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("b1").onclick = function () {
        console.log("Clicked ");
        chrome.tabs.executeScript({
            file: 'highlighter.js'
        });
    }
});
