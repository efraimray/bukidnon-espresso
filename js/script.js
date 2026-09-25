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

const heroSlides = document.querySelectorAll('.hero-background-slide');
const heroSlideCount = document.querySelector('.hero-slide-count strong');
let activeHeroSlide = 0;

const showHeroSlide = (slideIndex) => {
    activeHeroSlide = (slideIndex + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, index) => slide.classList.toggle('active', index === activeHeroSlide));
    heroSlideCount.textContent = `0${activeHeroSlide + 1}`;
};

document.querySelector('.hero-slide-prev').onclick = () => showHeroSlide(activeHeroSlide - 1);
document.querySelector('.hero-slide-next').onclick = () => showHeroSlide(activeHeroSlide + 1);
setInterval(() => showHeroSlide(activeHeroSlide + 1), 6500);

document.querySelectorAll('.filter-button').forEach((filterButton) => {
    filterButton.onclick = () => {
        const filter = filterButton.dataset.filter;

        document.querySelectorAll('.filter-button').forEach((button) => button.classList.remove('active'));
        filterButton.classList.add('active');

        document.querySelectorAll('.menu .box').forEach((item) => {
            item.classList.toggle('is-hidden', filter !== 'all' && item.dataset.category !== filter);
        });
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

var locationSwiper = new Swiper(".location-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".location-next",
        prevEl: ".location-prev",
    },
    pagination: {
        el: ".location-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});