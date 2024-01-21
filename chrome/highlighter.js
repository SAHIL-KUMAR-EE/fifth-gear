// highlighter.js
var fileUrl = chrome.runtime.getURL('dataset.txt');
console.log(fileUrl);
fetch(fileUrl)
    .then(response => response.text())
    .then(content => {
      // Taking input in an array
      const arr = content.split('\n').filter(Boolean);
      var words = arr.map(element => element.replace('\r', ''));
      var bodyText = document.body.innerHTML;
      var matchCounter = 0;

      for (var i = 0; i < words.length; i++) {
        var regex = new RegExp(words[i], 'gi');
        bodyText = bodyText.replace(regex, function(match) {
          matchCounter++;
          return '<mark>' + match + '</mark>';
        });
      }
      // Sending dark patterns count to popup.js
      sendMatchCounter(matchCounter);
      document.body.innerHTML = bodyText;
    });

function sendMatchCounter(counter) {
  chrome.runtime.sendMessage({ action: 'sendMatchCounter', matchCounter: counter });
}
