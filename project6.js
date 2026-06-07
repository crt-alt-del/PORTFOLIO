function openPage(page) {
    document.body.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = page;
    }, 500);
}

document.getElementById("back").addEventListener("click", function () {
    openPage("projects.html");
});