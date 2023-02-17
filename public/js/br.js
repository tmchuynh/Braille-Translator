var search = document.querySelector(".btn-outline-success");
var search_word = document.getElementsByClassName("search-word");

search.onclick = function() {
    $.getJSON("https://api.funtranslations.com/translate/braille/unicode.json?text=" + search_word.innerHTML, function (data) {
        console.log(data.contents.translated);
    });
};

