function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleDarkMode);
