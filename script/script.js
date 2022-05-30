$(function () {

    // swiper
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        resistanceRatio: 0,
        loop: false,
        mousewheel: true,
        keyboard: true,
        
        // navigation-button
        on: {
            slideChangeTransitionStart: function () {
                var n = this.activeIndex;
                changeButton(n);
            }
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });

    // navigation-button
    var buttonItem = $('.navi_menu-mobile__btn');
    buttonItem.click(function () {
        var ind = $(this).index();
        changeButton(ind);
        swiper.slideTo(ind);
    })
    function changeButton(index) {
        buttonItem.removeClass('active').eq(index).addClass('active');
    }

    // navigation-mobile
    $('.navi_menu__btn').on('click', function () {
        $('.navi_menu-mobile__btn').toggleClass('hidden');
    });
    $('.navi_menu__btn').on('click', function () {
        $('.navi_menu__btn_active').toggleClass('hidden');
    });
    $('.section').on('click', function () {
        if (!$('.navi_menu-mobile__btn').hasClass('hidden')) {
            $('.navi_menu-mobile__btn').addClass('hidden')
            $('.navi_menu__btn_active').addClass('hidden')
        }
    });

    // logo
    $('.navi_logo').click(function () {
        location.reload();
    });
});