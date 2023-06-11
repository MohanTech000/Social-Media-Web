let darkButton = document.querySelector(".darkTheme");

darkButton.onclick = function () {
    darkButton.classList.toggle("button-Active");
    document.body.classList.toggle("dark-color")
}