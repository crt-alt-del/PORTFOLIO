
function openPage(page) {
    window.location.href = page;
}

document.getElementById("vp").addEventListener("click", function () {
    openPage("projects.html");

});


document.getElementById("vp1").addEventListener("click", function () {
    openPage("projects.html");

});

document.getElementById("p1").addEventListener("click", function () {
    window.location.href = "project1.html";
})


document.getElementById("p2").addEventListener("click", function () {
    window.location.href = "project2.html";
})

document.getElementById("p3").addEventListener("click", function () {
    window.location.href = "project3.html";
})

function goBack() {
    window.history.back();
}

function openPage(page) {
    document.body.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = page;
    }, 300);
}

document.getElementById("vp1").addEventListener("click", function () {
    openPage("projects.html");
});

// const track = document.querySelector(".carousel-track");
// let slides = document.querySelectorAll(".slide");

// function setCenterGlow() {
//     slides.forEach(slide => slide.classList.remove("active"));

//     const centerIndex = Math.floor(slides.length / 3);
//     slides[centerIndex].classList.add("active");
// }

// setCenterGlow();

// function moveCarousel() {

//     slides = document.querySelectorAll(".slide");

//     // Get actual width of first slide + gap
//     const slideWidth = slides[0].offsetWidth;
//     const gap = parseFloat(getComputedStyle(track).gap);

//     track.style.transition = "transform 0.9s ease";
//     track.style.transform = `translateX(-${slideWidth + gap}px)`;

//     track.addEventListener("transitionend", function handler() {

//         track.appendChild(track.firstElementChild);

//         track.style.transition = "none";
//         track.style.transform = "translateX(0)";

//         slides = document.querySelectorAll(".slide");
//         setCenterGlow();

//         track.removeEventListener("transitionend", handler);
//     });
// }

// setInterval(moveCarousel, 2500);
const track = document.querySelector(".carousel-track");
let slides = document.querySelectorAll(".slide");

function setCenterGlow() {
    slides.forEach(slide => slide.classList.remove("active"));

    // Middle of the 3 visible slides
    if (slides[1]) {
        slides[1].classList.add("active");
    }
}

setCenterGlow();

function moveCarousel() {

    const slideWidth =
        slides[0].offsetWidth +
        parseFloat(getComputedStyle(track).gap);

    track.style.transition = "transform .8s ease";
    track.style.transform = `translateX(-${slideWidth}px)`;

    track.addEventListener("transitionend", function handler() {

        track.appendChild(track.firstElementChild);

        track.style.transition = "none";
        track.style.transform = "translateX(0)";

        slides = document.querySelectorAll(".slide");

        setCenterGlow();

        track.removeEventListener("transitionend", handler);
    });
}

setInterval(moveCarousel, 2500);

function setCenterGlow() {
    slides.forEach(slide => slide.classList.remove("active"));

    // Middle visible slide
    slides[1].classList.add("active");
}

function setPhotoLabel(cardId, title, description) {
    const card = document.getElementById(cardId);

    card.querySelector(".overlay h3").textContent = title;
    card.querySelector(".overlay p").textContent = description;
}


const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");

function openPopup(card) {
    const image = card.querySelector("img");

    popupImage.src = image.src;
    popup.style.display = "flex";
}

popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});