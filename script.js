const carrossel = document.querySelectorAll ('.carrossel')

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
});