$(function () {

    // swiper
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        resistanceRatio: 0,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // navigation-mobile
    $('.navi_menu__btn').on('click', function(){
        $('.navi_menu-mobile__btn').toggleClass('hidden');
    });
    $('.navi_menu__btn').on('click', function(){
        $('.navi_menu__btn_active').toggleClass('hidden');
    });
});