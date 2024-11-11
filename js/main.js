const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

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

let modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalOpen = document.querySelectorAll('.modal__open');

if (modalOpen.length) {
    modalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            modal.classList.add('active');
            bodyHidden();
        }
    })

    modalClose.onclick = () => {
        modal.classList.remove('active');
        bodyVisible();
    }
}