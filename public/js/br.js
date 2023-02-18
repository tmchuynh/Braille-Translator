var search = document.querySelector(".btn-outline-success");
var search_word = document.getElementById("search_word");
var display_section = document.querySelector(".display-section");

search.onclick = function () {
    var input = search_word.value;
    console.log(input);

    if (input === "") {
        display_section.innerHTML = "";
        return;
    } else {
        for (var i = 0; i< input.length; i++) {
            var img = document.createElement("img");
            if (input[i] === " ") { 
                img.setAttribute("src", "public/imgs/space.png");
            } else {
                img.setAttribute("src", "public/imgs/" + input[i] + ".png");
            }
            display_section.appendChild(img);
        }
    }
}
