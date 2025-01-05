var text = document.querySelector('meta[name="page-text"]') ? document.querySelector('meta[name="page-text"]').getAttribute('content') : "Texto padrão para esta página.";
var delay = 200;
var textElement = document.querySelector(".title-highlight");

var wordCount = 0;
function writeText () {
    if (wordCount <text.length){
        textElement.textContent += text.charAt(wordCount);
        wordCount++;
        setTimeout(writeText, delay);
    }
}

writeText();