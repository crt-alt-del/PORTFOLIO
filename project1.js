function openPage(page) {
    window.location.href = page;
}

// Back button
document.getElementById("back").addEventListener("click", function () {
    window.history.back();
});