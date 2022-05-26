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
    $('.navi_menu__btn').mouseenter(function(){
        $('.navi_menu-mobile').stop().slideDown(400);
    });
    $('.navi_menu__btn').mouseleave(function(){
        $('.navi_menu-mobile').stop().slideUp(400);
    });
});