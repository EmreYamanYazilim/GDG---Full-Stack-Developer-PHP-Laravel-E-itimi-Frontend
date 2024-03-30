// sadce ana sayfada çalışacak olan js kodları
const swiper = new Swiper('.home-swiper', {
    speed: 400,
    navigation: { // swiper "modules" içindeki  navigation objesi ile buttonlarımı yakaldım
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const navBrandSwiper = new Swiper('.nav-brand-swiper', {
    speed: 1400,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 1000, // gecikme
        pauseOnMouseEnter: true // auto oynamada mause üzerine  gelince değişmemesi için
    }
});

const brandSwiper = new Swiper('.brand-swiper', {
    speed: 1400,
    navigation: {
        nextEl: "#brandNext",
        prevEl: "#brandPrev"
    },
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true
    },
    breakpoints: {// ekran ölçülerine kadar  slider göstermesi için objemiz 320 de 2 slider göstericek
        320: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    }
});

const seasonProductSwiper = new Swiper('.season-product-swiper', {
    speed: 1400,
    navigation: {
        nextEl: "#seasonNext",
        prevEl: "#seasonPrev"
    },
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});