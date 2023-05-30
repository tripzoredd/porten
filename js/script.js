
function burgerMenu(x) {
    x.classList.toggle("close");
    document.getElementById('menu').classList.toggle("overlay");
    document.getElementById('menu').classList.toggle("active");
    document.getElementById('menu__list').classList.toggle("column");
    document.getElementById('body').classList.toggle("hidden");
};

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
        },
    }
});


const partner = new Swiper('.partner', {
    direction: 'horizontal',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        320: {
            enabled: true,
            slidesPerView: 1,
        },
        1024: {
            enabled: true,
            slidesPerView: 2,
        },
        1440: {
            enabled: true,
            slidesPerView: 3,
        },
        1920: {
            enabled: false,
            slidesPerView: 4,
        },
    }
    
});

const goods = new Swiper('.goods-swiper', {
    direction: 'horizontal',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        560: {
            slidesPerView: 2,
        },
        880: {
            slidesPerView: 3,
        },
        1141: {
            slidesPerView: 4,
        },
    }
});