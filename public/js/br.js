var search = document.querySelector(".btn-outline-success");
var search_word = document.getElementById("search_word");
var display_section = document.querySelector(".display-section");
let excludedKeys = [16, 17, 18, 225, 9, 27, 107, 109, 110, 37, 38, 39, 40, 20];

search_word.onkeyup = function () {
    var input = search_word.value;
    input = input.toLowerCase();
    console.log(input);

    /* Checking if the input is empty. If it is, it will clear the display section and return. */
    if (input === "") {
        display_section.innerHTML = "";
        return;
    }
    else if (excludedKeys.includes(event.keyCode)) {
        return;
    }
    else if (event.keyCode == 8) {
        display_section.removeChild(display_section.lastChild);
    }
    else {
        for (var i = 0; i < input.length; i++) {
            var img = document.createElement("img");
            if (input[i] === " ") {
                img.setAttribute("src", "public/imgs/space.png");
            } else {
                img.setAttribute("src", "public/imgs/" + input[i] + ".png");
            }
        }
        display_section.appendChild(img);
    }
}
