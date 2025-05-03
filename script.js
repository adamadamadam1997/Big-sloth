const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector(".nav");
const menuLabel = document.querySelector(".menuLabel");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("active");

    if (menuBtn.classList.contains("open")) {
        menuLabel.textContent = "close";
    } else {
        menuLabel.textContent = "menu";
    }
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');

    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});