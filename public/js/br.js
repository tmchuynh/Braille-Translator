$.getJSON("https://api.funtranslations.com/translate/braille/unicode.json?text=hello", function(data) {
    console.log(data.contents.translated);
});