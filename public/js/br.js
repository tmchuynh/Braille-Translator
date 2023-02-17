var search = document.querySelector(".btn-outline-success");
var search_word = document.getElementById("search_word");
var display_section = document.querySelector(".display-section");


search.onclick = function () {
    console.log(search_word.value);

    $.getJSON("https://api.funtranslations.com/translate/braille/unicode.json?text=" + search_word.value, function (data) {
        console.log(data);
    });
};

function display_search_word(translated) {
    for (var i = 0; i < translated.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = translated[i].key()
        display_section.appendChild(p);
    }
}