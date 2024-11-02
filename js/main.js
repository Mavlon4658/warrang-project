let homeCards = document.querySelectorAll('.home__card');

if (homeCards.length) {
    homeCards.forEach(el => {
        let swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 21,
            loop: true,
            navigation: {
                nextEl: el.querySelector('.btn_next'),
                prevEl: el.querySelector('.btn_prev'),
            },
            breakpoints: {
                1280: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                }
            }
        })
    })
}