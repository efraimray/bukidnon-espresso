let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let backToTop = document.querySelector('.back-to-top');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    backToTop.classList.toggle('show', window.scrollY > 400);
};

backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('.image-slider button').forEach((thumbnail, index) => {
    thumbnail.onclick = () => {
        var src = thumbnail.querySelector('img').getAttribute('src');
        document.querySelector('.main-home-image').src = src;
        document.querySelector('.hero-image-caption strong').textContent = `0${index + 1}`;
        document.querySelector('.image-slider button.active').classList.remove('active');
        thumbnail.classList.add('active');
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});