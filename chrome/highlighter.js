// highlighter.js
// var words = ["hurry","only"];

var fileUrl = chrome.runtime.getURL('abc.txt');
console.log(fileUrl);
fetch(fileUrl)
    .then(response => response.text())
    .then(content => {
      // Split the content into an array based on newline characters
      const arr = content.split('\n').filter(Boolean);

      // Remove '\r' from each element in the array
      var words = arr.map(element => element.replace('\r', ''));

      // Display the cleaned array in the console
      console.log(words);
      var bodyText = document.body.innerHTML;

      for (var i = 0; i < words.length; i++) {
        var regex = new RegExp(words[i], 'gi');
        bodyText = bodyText.replace(regex, function(match) {
          return '<mark>' + match + '</mark>';
        });
      }

      document.body.innerHTML = bodyText;
    })

// words from your .tsv file

