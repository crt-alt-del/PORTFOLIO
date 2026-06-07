function openPage(page) {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = page;
    }, 500); // transition duration
}

// Back button
document.getElementById("back").addEventListener("click", function () {
    openPage("index.html");
});
// Project 4
document.getElementById("p4").addEventListener("click", function () {
    openPage("project4.html");
});

// Project 5
document.getElementById("p5").addEventListener("click", function () {
    openPage("project5.html");
});

// Project 6
document.getElementById("p6").addEventListener("click", function () {
    openPage("project6.html");
});

// Project 7
document.getElementById("p7").addEventListener("click", function () {
    openPage("project7.html");
});

// Fade in effect when page loads
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});