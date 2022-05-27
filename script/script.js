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

    // logo
    $('.navi_logo').click(function() {
        location.reload();
    });


    // navigation-mobile
    $('.navi_menu__btn').on('click', function(){
        $('.navi_menu-mobile__btn').toggleClass('hidden');
    });
    $('.navi_menu__btn').on('click', function(){
        $('.navi_menu__btn_active').toggleClass('hidden');
    });
    $('.section').on('click', function(){
        if(!$('.navi_menu-mobile__btn').hasClass('hidden')){
            $('.navi_menu-mobile__btn').addClass('hidden')
            $('.navi_menu__btn_active').addClass('hidden')
        }
    })
});