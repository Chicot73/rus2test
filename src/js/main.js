document.addEventListener('DOMContentLoaded', function () {
    //Pop-up меню

    let puBurger = document.querySelector('.header__burger'),
        puBody = document.querySelector('.burger-menu'),
        puCross = document.querySelector('.burger-menu__cross'),
        puLinks = document.querySelector('.burger-menu__wrapper'),
        body = document.querySelector('body');

    puBurger.addEventListener('click', (e) => {
        puBody.style.display = 'block';
        body.style.overflow = 'hidden';
    });

    let puArr = [puCross, puLinks].forEach(item => {
        item.addEventListener('click', (e) => {
            puBody.style.display = 'none';
            body.style.overflow = 'scroll';
        })
    })
})


//swiper

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
    },
    speed: 1000,
    loop: true,
    freeMode: true,
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        10: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
    //mousewheel: true,
    //loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
        delay: 2500,
    },
    speed: 1000,
    loop: true,
    freeMode: true,
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        10: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
    //mousewheel: true,
    //loop: true,
});