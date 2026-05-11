function sendToBack() {
    var elements = document.querySelectorAll("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.position = "relative";
        elements[i].style.zIndex = "-1";
    }
}
