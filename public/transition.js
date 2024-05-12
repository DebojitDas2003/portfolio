document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".name h1");
    headers.forEach(function (header) {
        header.classList.add("transition");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("backgroundMusic");
    audio.volume = 0.25; // Set the volume to 25%
});

setTimeout(() => {
    const nameDiv = document.querySelector('.name');
    const letters = nameDiv.children;

    for (let i = 0; i < letters.length; i++) {
        setTimeout(() => {
            letters[i].innerText = '.';
        }, i * 100);
        setTimeout(() => {
            letters[i].style.transition = 'transform 0.3s ease-in-out';
            setTimeout(() => {
                letters[i].style.transform = 'translateY(-50px)';
            }, 1000);
            setTimeout(() => {
                letters[i].style.transform = 'translateY(0)';
            }, 1200);
            setTimeout(() => {
                letters[i].style.transform = 'translateY(-50px)';
            }, 2200);
            setTimeout(() => {
                letters[i].style.transform = 'translateY(0)';
            }, 2400);
            setTimeout(() => {
                letters[i].style.transform = 'translateY(-50px)';
            }, 3400);
            setTimeout(() => {
                letters[i].style.transform = 'translateY(0)';
            }, 3600);
        }, i * 100);
    }

    setTimeout(() => {
        window.location.href = 'homescreen.html'; // Redirect to homescreen.html
    }, 4000); // Adjust the delay as needed
}, 3000);
